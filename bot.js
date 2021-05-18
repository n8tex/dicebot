require('dotenv').config();
const token = process.env.TOKEN;
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Commands are not supported in discordjs as of current commit

// // The data for our command
// const commandData = {
//   name: 'echo',
//   description: 'Replies with your input!',
//   options: [{
//     name: 'input',
//     type: 'STRING',
//     description: 'The input which should be echoed back',
//     required: true,
//   }],
// };
//
// client.once('ready', () => {
//   // Creating a global command
//   // client.application.commands.create(commandData);
//
//   // Creating a guild-specific command
//   client.guilds.cache.get('844048247546183680').commands.create(commandData);
// });
//
// // Command Handling
// client.on('interaction', interaction => {
//   // If the interaction isn't a slash command, return
//   if (!interaction.isCommand()) return;
//
//   // Check if it is the correct command
//   if (interaction.commandName === 'echo') {
//     // Get the input of the user
//     const input = interaction.options[0].value;
//     // Reply to the command
//     interaction.reply(input);
//   }
// });

client.on('message', message => {
	if (message.content === prefix + 'roll') {
		message.channel.send('Please specificy which type of dice to roll: `!rollnormal`, `!rollextra`');
	} else if (message.content === prefix + 'rollnormal') {
    message.channel.send(getRndInteger(1,20));
  } else if (message.content === prefix + 'rollextra') {
    message.channel.send(getRndInteger(1,6));
  }
});

client.login(token);
