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

    await client.login('NDI1NjA3Njc3ODc2NTAyNTM4.WrDoCQ.bhycznXzh5XwxiACCwG5OK4uzCc');

    console.log(Client.getCommands());
};

start();