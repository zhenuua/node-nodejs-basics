import fs from 'node:fs';
import { unlink } from 'node:fs/promises';
import { getFSError } from './constants.js';

const remove = async () => {
    const deleteFilePath = './src/fs/files/fileToRemove.txt';
    if (!fs.existsSync(deleteFilePath)) return getFSError();
    try {
        await unlink(deleteFilePath);
        console.log(`successfully deleted ${deleteFilePath}`);
    } catch (error) {
        getFSError()
    }
};

await remove();