module.exports.run = async(message) => {
    const timeTaken = Date.now() - message.createdTimestamp;
    await message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
}

module.exports.help = {
    name: "ping",
    description: "Mide el tiempo de respuesta del servidor.",
    usage: "usage: $ping"
}