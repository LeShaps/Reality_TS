import { Client } from "@typeit/discord";

async function start() {
    const client = new Client({
        classes: [
            `${__dirname}/*Class.ts`,
            `${__dirname}/*Class.js`
        ],
        silent: false,
        variablesChar: ":"
    });

    await client.login('');

    console.log(Client.getCommands());
};

start();