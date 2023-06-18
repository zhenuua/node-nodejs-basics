import fs from 'node:fs';
import { getFSError } from './constants.js';

const list = async () => {
    const path = './src/fs/files';
    if (fs.existsSync(path)) {
        fs.readdir(path, (err, data) => {
            data.forEach((file) => {
                console.log(file);
            });
        });
    }
    else {
        getFSError();
    }
};

await list();