import { Worker, MessageChannel } from 'node:worker_threads';
import os from 'os';

const performCalculations = async () => {
    const numberCpu = os.cpus().length;
    const BASE_VALUE = 10;
    const result = [];
    for (let i = 0; i < numberCpu; i++) {
        const worker = new Worker("./src/wt/worker.js", {
            workerData: {
                value: BASE_VALUE + i,
            },
        });
        const messageChannel = new MessageChannel();
        worker.postMessage({ hereIsYourPort: messageChannel.port1 }, [
            messageChannel.port1,
        ]);
        messageChannel.port2.on("message", (value) => {
            result.push({ status: "resolved", data: value });
        });
        worker.on("error", (result) => {
            arr.push({ status: "error", data: null });
        });
        worker.on("exit", (code) => {
            if (code != 0) new Error("Worker has stopped");
            if (result.length === numberCpu) console.log(result)
        });
    }
};

await performCalculations();