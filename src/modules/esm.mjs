import fs from 'node:fs';
import path from "path";
import { release, version } from 'os';
import http from "http";
import { URL } from 'url';


const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = fs.readFileSync('src/modules/files/a.json');
} else {
    unknownObject = fs.readFileSync('src/modules/files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = http
    .createServer((_, res) => {
        res.end('Request accepted');
    });

const PORT = 3000;

console.log(JSON.parse(unknownObject));

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default { unknownObject, myServer };
