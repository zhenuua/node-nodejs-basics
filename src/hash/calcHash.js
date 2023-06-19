import fs from 'node:fs';


const calculateHash = async () => {
    const { createHash } = await import('node:crypto');
    const hash = createHash('sha256');
    const data = fs.readFileSync('./src/hash/files/fileToCalculateHashFor.txt');
    hash.update(data);
    console.log(hash.digest('hex'));
};

await calculateHash();