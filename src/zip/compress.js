import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const compress = async () => {
    const input = 'src/zip/files/fileToCompress.txt';
    const output = 'src/zip/files/archive.gz';
    try {
        const pipe = promisify(pipeline);
        const gzip = createGzip();
        const source = createReadStream(input);
        const destination = createWriteStream(output);
        await pipe(source, gzip, destination);
    }
    catch {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
};

await compress();