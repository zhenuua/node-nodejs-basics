const parseEnv = () => {
    const prefix = "RSS_";
    for (const key in process.env) {
        if (key.includes(prefix)) console.log(`${key}=${process.env[key]}`);
    }
};

parseEnv();