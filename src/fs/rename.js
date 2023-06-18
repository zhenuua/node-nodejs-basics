import fs from 'node:fs';
import { getFSError } from './constants.js';

const rename = async () => {
    const oldFile = './src/fs/files/wrongFilename.txt';
    const newFile = './src/fs/files/properFilename.md';

    if (fs.existsSync(oldFile) && !fs.existsSync(newFile)) {
        fs.rename(oldFile, newFile, (err) => {
            if (err) getFSError();
        });
    }
    else {
        getFSError();
    }
};

await rename();