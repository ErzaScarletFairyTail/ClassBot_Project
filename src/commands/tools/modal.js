const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('modal') // Set the name of the command
        .setDescription('Returns a modal!'), // Set the description of the command
    async execute(interaction, client) { // Execute the command
        const modal = new ModalBuilder()
            .setCustomId('testmodal')
            .setTitle('Test Modal');

        const textInput = new TextInputBuilder()
            .setCustomId('testTextInput')
            .setLabel('Write something inside the text input!')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const testTextInput2 = new TextInputBuilder()
            .setCustomId('testTextInput2')
            .setLabel('Write something inside the text input!')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const row = new ActionRowBuilder()
            .addComponents(textInput);

        const row2 = new ActionRowBuilder()
            .addComponents(testTextInput2);
            
        modal.addComponents(row , row2);

        await interaction.showModal(modal);
            
    }
};