const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('horraire') // Set the name of the command
        .setDescription('Retourne un horraire!') // Set the description of the command
        .addStringOption(option => option.setName('heure').setDescription('Choisir l\'horrraire').setRequired(true)),
    async execute(interaction, client) { // Execute the command
            await interaction.reply({
                content: `Voici l'horraire demandé: ${interaction.options.getString('heure')}`
            });
    }
};