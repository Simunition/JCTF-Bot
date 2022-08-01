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

	if (interaction.commandName === 'hello') {
		await interaction.reply('Hello ' + interaction.user.username + '!');
	}

	if (interaction.commandName === 'givemetheflag') {
		await interaction.reply({ content: 'flag{disc0rd_flag_98725}', ephemeral: true });
	}

	if (interaction.commandName === 'start_instance') {
		if (interaction.channelId != "1003131135620022272") {
			await interaction.reply({ content: 'Sorry.. You have to be an admin to use this command', ephemeral: true});
		} else {
			await interaction.reply({ content: 'Starting instance...'});
		}
	}

	if (interaction.commandName === 'stop_instance') {
		if (interaction.channelId != "1003131135620022272") {
			await interaction.reply({ content: 'Sorry.. You have to be an admin to use this command', ephemeral: true});
		} else {
			await interaction.reply({ content: 'Stopping instance...'});
		}
	}

	if (interaction.commandName === 'terminate_instance') {
		if (interaction.channelId != "1003131135620022272") {
			await interaction.reply({ content: 'Sorry.. You have to be an admin to use this command', ephemeral: true});
		} else {
			await interaction.reply({ content: 'Terminating instance...'});
		}
	}

	if (interaction.commandName === 'restore_instance_snapshot') {
		if (interaction.channelId != "1003131135620022272") {
			await interaction.reply({ content: 'Sorry.. You have to be an admin to use this command', ephemeral: true});
		} else {
			await interaction.reply({ content: 'Restoring instance snapshot...'});
		}
	}
});

client.login(token);
