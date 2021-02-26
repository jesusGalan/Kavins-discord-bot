// Coding a Bot with discord.js
// Discord Bots
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/bots/discord/03-discordjs.html
// https://youtu.be/8k-zyUyuvlM

console.log('Beep beep! 🤖');

const Discord = require('discord.js');
const client = new Discord.Client();
// I recommend using dotenv, you can see how the project is setup here: 
// https://github.com/CodingTrain/Discord-Bot-Choo-Choo
// dotenv will be covered in a future video
client.login('ODE0ODc2MjE0MjIwMDI5OTYy.YDkOnQ.2zJNQYmL3AnYxGrYBXASPEz_IXM');

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('💖');
}

const replies = [
  '🚂🌈💖',
  'Choo choo!',
  'Ding! 🛎',
  'Never forget this dot!'
]

client.on('message', gotMessage);

function gotMessage(msg) {
  console.log(msg.content.indexOf('qtp'));
  if (msg.channel.id == '814868154823606316' && msg.content === '!rank') {
    // msg.reply('🚂🌈💖');

    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
  }
}
