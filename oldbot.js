require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
const token = process.env.TOKEN;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

client.on('message', message => {
	if (message.content === prefix + 'roll') {
		message.channel.send('Please specificy which type of dice to roll: `!rollnormal`, `!rollextra`');
	} else if (message.content === prefix + 'rollnormal') {
    message.channel.send(getRndInteger(1,20));
  } else if (message.content === prefix + 'rollextra') {
    message.channel.send(getRndInteger(1,6));
  }
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
})

client.login(token);
