module.exports.run = async(message) => {
    await message.reply(`Saludos! Ponte cómodo.`);
}

module.exports.help = {
    name: "hola",
    description: "Dice hola al usuario",
    usage: "$hola"
}