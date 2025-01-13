import folder from './lib/folders.ts';
import css from './styles/global.css';
import plugin from '../plugin.json';
import file from './lib/files.ts';

function style(x, y) {
  return `${x}::before {
  display: inline-block;
  content: '' !important;
  background-image: url(https://localhost/__cdvfile_files-external__/plugins/sebastianjnuwu.symbols.icons/icons/${y}.svg) !important;
  background-size: contain;
  background-repeat: no-repeat;
  height: 1em;
  width: 1em;
  }`;
};

function get_type(filename) {
  
  const extension = filename.slice(filename.indexOf('.') + 1);

  const one = file.find((type) => {
    if (type.file_name?.includes(filename.toLowerCase())) return type;
  });
  
  if (one) return one.name;
  
  const two = file.find((type) => {
    if (type.extension?.includes(extension)) return type;
  });
  
  if (two) return two.name;
  
  return extension;
};

const folder_style = [

  style(`.list.collapsible.hidden > div[data-type="root"] > .icon.folder`, 'folder'),
  
  style(`.list.collapsible > div[data-type="root"] > .icon.folder`, 'folder-open'),

  style(`.list.collapsible.hidden > div.tile[data-name][data-type="dir"] > .icon.folder`, 'folder'),
  
  style(`.list.collapsible > div.tile[data-name][data-type="dir"] > .icon.folder`, 'folder-open'),

  style(`#file-browser > ul > li.tile[type="dir"]  > .icon.folder`, 'folder'),

  style(`#file-browser > ul > li.tile[type="directory"]  > .icon.folder`, 'folder'),
  
  folder.map(x => {
    return [
      
     style(`#file-browser > ul > li.tile[type="directory"][name="${x.folder_name}"] > .icon.folder`, x.icon),

     style(`#file-browser > ul > li.tile[type="dir"][name="${x.folder_name}"] > .icon.folder`, x.icon),

     style(`.list.collapsible.hidden > div.tile[data-name="${x.folder_name}"][data-type="dir"] > .icon.folder`, x.icon)].join('');
 
  }).join('\n')
  
].join('\n');

const file_style = file.map((x) => {
  return style(`.file.file_type_${x.name}`, x.icon)
}).join('\n');

acode.require('helpers').getIconForFile = (x) => {
  const { getModeForPath } = ace.require('ace/ext/modelist');
  const { name } = getModeForPath(x);
  const z = name;
  const y = get_type(x);

  return `file file_type_default file_type_${z} file_type_${y}`;
};

class symbols {
  
  async init() {
   
   this.css = <style textContent={css}>
    </style>;
    
   this.file_style = <style textContent={file_style}>
    </style>;
    
   this.folder_style = <style textContent={folder_style}>
    </style>;
   
   document.head.append(this.css, this.file_style, this.folder_style);
   
  };

  async destroy() {
    this.file_style?.remove();
    this.folder_style?.remove();
    this.css?.remove();
  };

};

if (window.acode) {

  const Instance = new symbols();
    
  acode.setPluginInit(plugin.id, () => Instance.init());

  acode.setPluginUnmount(plugin.id, () => Instance.destroy());
};
