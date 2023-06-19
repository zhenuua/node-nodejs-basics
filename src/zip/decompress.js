import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';


const decompress = async () => {
    const input = 'src/zip/files/archive.gz';
    const output = 'src/zip/files/fileToCompress.txt';
    try {
        const pipe = promisify(pipeline);
        const gzip = createUnzip();
        const source = createReadStream(input);
        const destination = createWriteStream(output, {
            encoding: 'utf-8'
        });
        await pipe(source, gzip, destination);
    }
    catch {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
};

await decompress();