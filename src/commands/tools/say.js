const { SlashCommandBuilder, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('say') // Set the name of the command
        .setDescription('The bot say what you want to say.') // Set the description of the command
        .addStringOption(option => option
            .setName('arguments')
            .setDescription('What the bot will say.')
            .setRequired(true)
        ),
    async execute(interaction, client) { // Execute the command
        const args = interaction.options.getString('arguments');

        // Embed
        const embed = {
            color: 0x0099ff,
            title: `${interaction.user.username} says:`,
            description: args,
            timestamp: new Date()
        }

        // Send the embed
        await interaction.reply({ embeds: [embed] });

    }
};