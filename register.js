const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
require('dotenv').config();

const guildId = process.env.GUILD_ID;
const token = process.env.BOT_TOKEN;
const clientId = process.env.APP_ID;

const commands = [
	new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong!'),
	new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Replies with hello!'),
	new SlashCommandBuilder()
		.setName('givemetheflag')
		.setDescription('??'),
	new SlashCommandBuilder()
		.setName('start_instance')
		.setDescription('Start given instance')
		.addStringOption(option =>
			option.setName('instance')
			.setDescription('The instance to start')
			.setRequired(true)
      .addChoices(
        { name: 'Easy', value: 'easy' },
        { name: 'Medium', value: 'medium' },
        { name: 'Hard', value: 'hard' },
        { name: 'Insane', value: 'insane'}
      )),
  new SlashCommandBuilder()
  .setName('stop_instance')
  .setDescription('Start given instance')
  .addStringOption(option =>
    option.setName('instance')
    .setDescription('The instance to start')
    .setRequired(true)
    .addChoices(
      { name: 'Easy', value: 'easy' },
      { name: 'Medium', value: 'medium' },
      { name: 'Hard', value: 'hard' },
      { name: 'Insane', value: 'insane'}
    )),
  new SlashCommandBuilder()
  .setName('terminate_instance')
  .setDescription('Start given instance')
  .addStringOption(option =>
    option.setName('instance')
    .setDescription('The instance to start')
    .setRequired(true)
    .addChoices(
      { name: 'Easy', value: 'easy' },
      { name: 'Medium', value: 'medium' },
      { name: 'Hard', value: 'hard' },
      { name: 'Insane', value: 'insane'}
    )),
  new SlashCommandBuilder()
  .setName('restore_instance_snapshot')
  .setDescription('Start given instance')
  .addStringOption(option =>
    option.setName('instance')
    .setDescription('The instance to start')
    .setRequired(true)
    .addChoices(
      { name: 'Easy', value: 'easy' },
      { name: 'Medium', value: 'medium' },
      { name: 'Hard', value: 'hard' },
      { name: 'Insane', value: 'insane'}
    ))
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
