const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "$";

client.on("message", function(message) {
    if (message.author.bot) return; // If the message is from a bot stop running commands
    if (!message.content.startsWith(prefix)) return;

    if (message.channel.id == '818913982609752064') {
        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();

        let _command = require(`./cmds/${command}.js`);
        switch (command) {
            case "help":
                const fs = require("fs");
                fs.readdir("./cmds", (err, files) => {
                    _command.run(message, err, files);
                });
                break;
            case "sum":
                _command.run(message, args);
                break;
            default:
                _command.run(message);
                break;
        }
    }
});

client.login(config.BOT_TOKEN);