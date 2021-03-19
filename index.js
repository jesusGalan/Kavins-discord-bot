const Discord = require("discord.js");
const config = require("./config.json");
const getCmd = (name) => require(`./cmds/${name}.js`);

const client = new Discord.Client();
const prefix = "$";
const channels = {
  team: "812372868322164797",
  pruebas: "818913982609752064",
};

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if (
    message.channel.id === channels.pruebas ||
    message.channel.id === channels.team
  ) {
    let cmd = null;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(" ");
    const command = args.shift().toLowerCase();

    try {
      cmd = getCmd(command);
    } catch (_) {
      cmd = getCmd("help");
    } finally {
      return cmd.run(message, args);
    }
  }
});

client.login(config.BOT_TOKEN);
