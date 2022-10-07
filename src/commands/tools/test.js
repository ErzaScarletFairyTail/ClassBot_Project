const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('test') // Set the name of the command
        .setDescription('Test a features')
        .addUserOption(option => option.setName('user').setDescription('The user to test').setRequired(true))
        .addStringOption(option => option.setName('string').setDescription('The string to test')),

    async execute(interaction, client) { // Execute the command
        const user = interaction.options.getUser('user'); // Get the user from the options
        let string = interaction.options.getString('string'); // Get the string from the options
        const member = await interaction.guild.members.fetch(user.id).catch(console.error); // Get the member from the user

        if (!string) string = 'No string provided'; // If there is no string, set it to 'No string provided'

        user.send({
            content: `You have been tested by ${interaction.user.tag}!\n Here are the results: ${string}`,
        });

        interaction.reply({
            content: `You have tested ${member.user.tag}!\n Here are the results: ${string}`,
            ephemeral: true,
        });
    }
};