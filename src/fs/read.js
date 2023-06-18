import fs from 'node:fs';
import { getFSError } from './constants.js';


const read = async () => {
    const filePath = './src/fs/files/fileToRead.txt';
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) return console.error(err);
            console.log(data);
        });
    }
    else {
        getFSError();
    }
};

await read();