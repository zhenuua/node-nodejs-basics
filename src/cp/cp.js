import { fork } from 'child_process';


const spawnChildProcess = async (args) => {
    const childProcess = fork('./src/cp/files/script.js', args);
    childProcess.on('message', (message) => {
        console.log(message);
    });
    childProcess.on('close', (code) => {
        console.log('was closed with code: ' + code);
    });
};

spawnChildProcess([1, 2, 3, 4, 5]);
