const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('button') // Set the name of the command
        .setDescription('Return a button!'), // Set the description of the command
    async execute(interaction, client) { // Execute the command
        const button = new ButtonBuilder() // Create a new ButtonBuilder
            .setCustomId('testbtn') // Set the custom ID of the button
            .setLabel('Test Button') // Set the label of the button
            .setStyle(ButtonStyle.Primary); // Set the style of the button
        
        const row = new ActionRowBuilder() // Create a new ActionRowBuilder
            .addComponents(button); // Add the button to the ActionRowBuilder

        await interaction.reply({
            components: [row] // Add the ActionRowBuilder to the reply
        });
    }
};