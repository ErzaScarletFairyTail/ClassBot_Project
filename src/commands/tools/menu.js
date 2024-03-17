const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('menu') // Set the name of the command
        .setDescription('Return a select Menu!'), // Set the description of the command
    async execute(interaction, client) { // Execute the command
        const menu = new SelectMenuBuilder() // Create a new SelectMenuBuilder
            .setCustomId('testmenu') // Set the custom ID of the menu
            .setPlaceholder('Select an option') // Set the placeholder of the menu
            .addOptions([ // Add options to the menu
                new SelectMenuOptionBuilder() // Create a new SelectMenuOptionBuilder
                    .setLabel('Option 1') // Set the label of the option
                    .setDescription('This is option 1') // Set the description of the option
                    .setValue('option1'), // Set the value of the option
                new SelectMenuOptionBuilder() // Create a new SelectMenuOptionBuilder
                    .setLabel('Option 2') // Set the label of the option
                    .setDescription('This is option 2') // Set the description of the option
                    .setValue('option2'), // Set the value of the option
            ]);

        const row = new ActionRowBuilder() // Create a new ActionRowBuilder
            .addComponents(menu); // Add the menu to the row

        await interaction.reply({
            content: 'Select a menu option', // Set the content of the reply
            components: [row], // Set the components of the reply
            ephemeral: true // Set the ephemeral of the reply
        });
    }
};