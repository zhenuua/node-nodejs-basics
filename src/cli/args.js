const parseArgs = () => {
    process.argv.slice(2).forEach((val, index, array) => {
        const isKeyArg = index % 2 === 0;
        const argValue = array[index + 1];
        if (isKeyArg) console.log(`${val} is ${argValue},`);
    });
};

parseArgs();