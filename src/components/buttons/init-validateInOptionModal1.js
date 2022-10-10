const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-validateInOptionModal1'
    },

    async execute(interaction, client) {

        // Open the timetable of the server
        const timetable = JSON.parse(fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`));

        // Get the section of the timetable
        const classe = timetable.data.class;
        const section = timetable.data.section;

        if((classe === "premiere" && section === "general") || classe === "terminale" ){

            if(section === "general" && classe === "premiere"){
                await interaction.update({
                    content: 'Available for Première General',
                    components: []
                });
            } else if (section === "general" && classe === "terminale"){
                await interaction.update({
                    content: 'Available for Terminale General',
                    components: []
                });
            } else if (section === "technology" && classe === "terminale"){
                await interaction.update({
                    content: 'Available for Terminale Technology',
                    components: []
                });
            }
        }
    }
}