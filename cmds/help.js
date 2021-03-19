const { readdir } = require("fs/promises");

const help = {
  name: "$help",
  description: "Reenvia la lista de comandos posibles.",
};

const run = async (message, args) => {
  const commandName = args[0];
  const fileNames = await readdir(__dirname);
  const commandHelps = await fileNames
    .filter((fileName) => fileName !== __filename.slice(__dirname.length + 1))
    .reduce((acc, fileName) => {
      const props = require(`./${fileName}`);
      return [...acc, props.help];
    }, []);

  const genericHelpMessage = `Puedes usar "$help [comando a usar]". Los comandos son los siguientes: ${commandHelps
    .map(({ name }) => `\n - $${name}`)
    .join("")}`;
  try {
    const searchedCommand = commandHelps.find(
      ({ name }) => name === commandName
    );

    if (commandName == null) {
      return await message.reply(genericHelpMessage);
    }

    return await message.reply(
      `${searchedCommand.name}: ${searchedCommand.description}`
    );
  } catch (_) {}
};

module.exports = { help, run };
