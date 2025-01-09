import path from "node:path";
import colors from "colors";
import fs from "node:fs";
import jszip from "jszip";

const zip = new jszip();

/**
 * Path to the plugin assets and directories.
 */
const iconPath = path.join("./icon.png");
const jsonPath = path.join("./plugin.json");
const buildFolder = path.join("./build");
let readmePath = path.join("./readme.md");

// Check for the existence of the readme.md file
if (!fs.existsSync(readmePath)) {
  readmePath = path.join("./README.md");
}

/**
 * Adds essential files (icon, plugin.json, readme) to the ZIP archive.
 */
zip.file("icon.png", fs.readFileSync(iconPath));
zip.file("plugin.json", fs.readFileSync(jsonPath));
zip.file("readme.md", fs.readFileSync(readmePath));

/**
 * Loads all files from the build folder into the ZIP archive, skipping LICENSE.txt files.
 * @param {string} root - The root path of the current folder being processed.
 * @param {string} folder - The path of the folder being processed.
 */
async function loadFile(root, folder) {
  try {
    const distFiles = fs.readdirSync(folder);
    console.log(
      `[${getTimestamp()}] ${colors.cyan("• ")}Reading files from: ${folder}`,
    );

    for (const file of distFiles) {
      const filePath = path.join(folder, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        zip.folder(file);
        await loadFile(path.join(root, file), filePath);
        continue;
      }

      // Skip LICENSE.txt files
      if (!/LICENSE.txt/.test(file)) {
        zip.file(path.join(root, file), fs.readFileSync(filePath));
        console.log(
          `[${getTimestamp()}] ${colors.green("• ")}Added file: ${path.join(root, file)}`,
        );
      } else {
        console.warn(
          `[${getTimestamp()}] ${colors.yellow("• ")}Skipped file: ${path.join(root, file)} (LICENSE.txt)`,
        );
      }
    }
  } catch (err) {
    console.error(
      `[${getTimestamp()}] ${colors.red("• Error: ")}Failed to read or load files from ${folder}. Error: ${err.message}`,
    );
    console.error(err.stack); // Include stack trace for debugging
  }
}

/**
 * Generates a timestamp in the format [HH:MM:SS] for logging purposes.
 * @returns {string} The formatted timestamp.
 */
function getTimestamp() {
  const now = new Date();
  return now.toISOString().split("T")[1].split(".")[0];
}

// Load files from the build folder
try {
  console.log(
    `[${getTimestamp()}] ${colors.brightBlue("• Starting to load files from the build directory...")}`,
  );
  loadFile("", buildFolder);

  // Create the plugin.zip file and notify the user on completion
  zip
    .generateNodeStream({ type: "nodebuffer", streamFiles: true })
    .pipe(fs.createWriteStream(path.join("./plugin.zip")))
    .on("finish", () => {
      console.log(
        `[${getTimestamp()}] ${colors.brightGreen("• ")}Plugin successfully compiled for Acode.`,
      );
    })
    .on("error", (err) => {
      console.error(
        `[${getTimestamp()}] ${colors.red("• Error: ")}Failed to generate plugin zip. Error: ${err.message}`,
      );
      console.error(err.stack); // Include stack trace for debugging
    });
} catch (err) {
  console.error(
    `[${getTimestamp()}] ${colors.red("• Error: ")}An unexpected error occurred during the file compilation process. Error: ${err.message}`,
  );
  console.error(err.stack); // Include stack trace for debugging
}
