import fs from 'node:fs';
import { stdin } from 'node:process';


const write = async () => {
    const file = fs.createWriteStream('./src/streams/files/fileToWrite.txt');
    stdin.pipe(file);
};

await write();