const help = {
  name: "$dice",
  description: "Lanza un dado de 99 caras, la suerte del azar...",
};

const throwDice = () => Math.floor(Math.random() * 99) + 1;

const run = async (message) => {
  const reply = `Lanzo los dados: ${throwDice()}`;

  await message.reply(JSON.stringify(reply));
};

module.exports = {
  help,
  run,
};
