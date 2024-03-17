const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-validateInOptionModal1'
    },

    async execute(interaction, client) {

        
        const inOptionModalTerminalTech1 = new ModalBuilder()
            .setTitle("Terminal Technologique SIN Option")
            .setCustomId("init-inOptionModalTerminalTech1");

        const inOptionModalTerminalTechSINSubject = new TextInputBuilder()
            .setCustomId("inOptionModalTerminalTechSINSubject")
            .setLabel("Subject")
            .setPlaceholder("Subject")
            .setRequired(false)
            .setStyle(TextInputStyle.Short);

        const inOptionModalTerminalTechSINClassroom = new TextInputBuilder()
            .setCustomId("inOptionModalTerminalTechSINClassroom")
            .setLabel("Classroom")
            .setPlaceholder("Classroom")
            .setRequired(false)
            .setStyle(TextInputStyle.Short);

        inOptionModalTerminalTech1.addComponents(
            new ActionRowBuilder()
                .addComponents(inOptionModalTerminalTechSINSubject),
            new ActionRowBuilder()
                .addComponents(inOptionModalTerminalTechSINClassroom)
        );


        // Open the timetable of the server
        const timetable = JSON.parse(fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`));

        // Get the section of the timetable
        const classe = timetable.data.class;
        const section = timetable.data.section;

        if((classe === "premiere" && section === "general") || classe === "terminale" ){

            if(section === "general" && classe === "premiere"){
                await interaction.update({
                    content: 'Not available for Première General',
                    components: []
                });
            } else if (section === "general" && classe === "terminale"){
                await interaction.update({
                    content: 'Not available for Terminale General',
                    components: []
                });
            } else if (section === "technology" && classe === "terminale"){
                await interaction.showModal(inOptionModalTerminalTech1);
            }
        }
    }
}