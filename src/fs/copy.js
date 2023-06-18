import fs from 'node:fs';
import { getFSError } from './constants.js';


const copy = async () => {
  const newFolderName = 'files_copy';
  const basePath = './src/fs/files';
  const copyPath = `./src/fs/${newFolderName}/`;

  if (fs.existsSync(basePath) && !fs.existsSync(copyPath)) {
    fs.mkdir(copyPath, (err) => { });
    fs.readdir(basePath, (err, data) => {
      data.forEach((file) => {
        fs.copyFile(`${basePath}/${file}`, `${copyPath}/${file}`, (err) => {
          if (err) return err;
        });
      });
    });
  }
  else {
    getFSError()
  }
};

await copy();
