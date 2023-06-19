import fs from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    const file = './src/streams/files/fileToRead.txt';
    const rr = fs.createReadStream(file);
    rr.on('open', () => {
        rr.pipe(stdout);
    });
};

await read();