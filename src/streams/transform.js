import { Transform } from 'stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const transformText = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse().toString('utf-8'));
        },
    });

    stdin.pipe(transformText).pipe(stdout);
};

await transform();