const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('test') // Set the name of the command
        .setDescription('Test a features')
        .addUserOption(option => option.setName('user').setDescription('The user to test').setRequired(true))
        .addStringOption(option => option.setName('string').setDescription('The string to test')),

    async execute(interaction, client) { // Execute the command
        // Get the role 'Admin' from the guild
        const adminRole = interaction.guild.roles.cache.find(role => role.name === 'Admin');

        await interaction.reply({
            content: `Role Admin: ${adminRole}\nID: ${adminRole.id}`,
            ephemeral: true
        });
    }
};