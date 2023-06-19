import { isMainThread } from 'node:worker_threads';


const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (isMainThread) {
        console.log(nthFibonacci(15));
    } else {
        console.log(isMainThread);
    }
};

sendResult();