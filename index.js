const fs = require("fs");

const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "$";

client.on("message", function(message) {
    if (message.author.bot) return; // Si el que habla es un bot deja de procesar el comando
    if (!message.content.startsWith(prefix)) return;

    if (message.channel.id == '818913982609752064') {
        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();

        if (command === "help") {
            fs.readdir("./cmds/", (err, files) => {
                if(err) console.error(err);

                let jsfiles = files.filter(f => f.split(".").pop() === "js");
                if(jsfiles.length <= 0) {
                    console.log("No commands to load!");
                    return;
                }
                var namelist = "";
                var desclist = "";
                var usage = "";

                console.log(jsfiles)

                let result = jsfiles.forEach((f, i) => {
                    let props = require(`./cmds/${f}`);
                    namelist = props.help.name;
                    desclist = props.help.description;
                    usage = props.help.usage;

                    message.author.send(`**${namelist}** \n${desclist} \n${usage}`);
                });


            });
        }

        if (command === "hola") {
            let _command = require(`./cmds/${command}.js`);
            _command.run(message)
        }

        if (command === "ping") {
            let _command = require(`./cmds/${command}.js`);
            _command.run(message)
        }
        else if (command === "sum") {
            let _command = require(`./cmds/${command}.js`);
            _command.run(message, args)
        }
    }
});

client.login(config.BOT_TOKEN);