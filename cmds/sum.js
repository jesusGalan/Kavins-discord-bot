module.exports.run = async(message, args) => {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    await message.reply(`La suma de todos los argumentos es ${sum}!`);
}

module.exports.help = {
    name: "sum",
    description: "Suma varios numeros",
    usage: "$sum"
}