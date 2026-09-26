import {build} from 'esbuild';
import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await build({entryPoints:['app.js'],bundle:true,platform:'browser',format:'esm',target:'es2020',outfile:'dist/app.js',minify:true});
await copyFile('index.html','dist/index.html');