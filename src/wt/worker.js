import { isMainThread, parentPort, workerData } from 'node:worker_threads';
import assert from 'assert';


const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (isMainThread) {
        console.log(nthFibonacci(15));
    } else {
        parentPort.once('message', (value) => {
            assert(value.hereIsYourPort instanceof MessagePort);
            value.hereIsYourPort.postMessage(nthFibonacci(workerData.value));
            value.hereIsYourPort.close();
        });
    }
};

sendResult();