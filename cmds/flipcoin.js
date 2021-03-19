const help = {
  name: "$flipcoin",
  description: "Lanza una moneda al aire, la suerte del azar...",
};

const run = async (message) => {
  const random = Math.random();
  const reply = `Lanzo la moneda al aire: ${random > 0.5 ? "cara!" : "cruz!"}`;

  await message.reply(JSON.stringify(reply));
};

module.exports = {
  help,
  run,
};
