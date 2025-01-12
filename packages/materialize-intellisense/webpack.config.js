import { exec } from 'node:child_process';
import { resolve } from 'node:path';

const main = (env, options) => {
	return {
		target: 'node',
		mode: options.mode,
		entry: { main: './src/main.js' },
		output: {
			path: resolve("./.acode", "build"),
			filename: '[name].js',
			chunkFilename: '[name].js',
		},
		resolve: {
        extensions: [".js"]
    },
		module: {
			rules: [
				{
					test: /\.m?js$/,
					use: [
						'html-tag-js/jsx/tag-loader.js',
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env'],
							},
						},
					],
				},
        {
    test: /\.(sa|sc|c)ss$/,
    use: [ 'raw-loader', 'postcss-loader', 'sass-loader', {
            loader: 'postcss-loader',
            options: {
              postcssOptions: import('./postcss.config.js'), 
            },
          },
        ],
      },
			],
		},
		plugins: [
			{
				apply: (bash) => {
	bash.hooks.afterDone.tap('bash', async () => {
		await exec('node .acode/zip.js');
	});
},
			},
		],
	};
};

export default main;