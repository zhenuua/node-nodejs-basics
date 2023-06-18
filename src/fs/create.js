import fs, { access, constants } from 'node:fs';
import { getFSError } from './constants.js';

const fileName = 'fresh.txt';
const content = 'I am fresh and young';
const path = `./src/fs/files/${fileName}`;

const create = async () => {
  access(path, constants.F_OK, (err) => {
    if (!err) getFSError();
    fs.writeFile(path, content, (error) => {
      if (error) return console.error(error.message);
    })
  });
};

await create();