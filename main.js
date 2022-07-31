const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('dotenv').config();

const token = process.env.BOT_TOKEN;

client.on('ready', () => {
	console.log('Logged in!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}

	if (interaction.commandName === 'givemetheflag') {
		await interaction.reply({ content: 'flag{disc0rd_flag_98725}', ephemeral: true });
	}
});

client.login(token);
