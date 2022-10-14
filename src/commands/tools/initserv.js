const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('initserv') // Set the name of the command
        .setDescription('Returns a modal to create a file!'), // Set the description of the command
    async execute(interaction, client) { // Execute the command

        if (!fs.existsSync(`./src/data/${interaction.guild.id}/timetable.json`)) { // If the folder doesn't exist

            const menu = new SelectMenuBuilder() // Create a new SelectMenuBuilder
            .setCustomId('init-whichclass') // Set the custom ID of the menu
            .setPlaceholder('Select a class') // Set the placeholder of the menu
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([ // Add options to the menu
                new SelectMenuOptionBuilder()
                    .setLabel('Seconde')
                    .setValue('seconde')
                    .setDescription('Select this option if you are in seconde'),
                new SelectMenuOptionBuilder()
                    .setLabel('Première')
                    .setValue('premiere')
                    .setDescription('Select this option if you are in première'),
                new SelectMenuOptionBuilder()
                    .setLabel('Terminale')
                    .setValue('terminale')
                    .setDescription('Select this option if you are in terminale')
            ]);

            const row = new ActionRowBuilder() // Create a new ActionRowBuilder
                .addComponents(menu); // Add the menu to the row

            await interaction.reply({
                content: 'Config the class Server:', // Set the content of the reply
                components: [row] // Set the components of the reply
            });
        } else {
            await interaction.reply({
                content: 'The server is already configured!',
                ephemeral: true
            });
        }

        
        
    }
};