const { ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-inOptionModalTerminalTech2'
    },

    async execute(interaction, client) {

        const { inoptionwork } = client;

        // Validate Button and Cancel
        const validateInOptionModalTerminalTech2 = new ButtonBuilder()
            .setCustomId("init-validateInOptionModalTerminalTech2")
            .setLabel("Validate")
            .setStyle(ButtonStyle.Success);

        const week = inoptionwork[0];
        const day = inoptionwork[1];
        const time = inoptionwork[2];
        const subjectEE = interaction.fields.getTextInputValue("inOptionModalTerminalTechEESubject");
        const classroomEE = interaction.fields.getTextInputValue("inOptionModalTerminalTechEEClassroom");

        if(subjectEE != "" && classroomEE != ""){
            // Open the timetable of the server
            const timetable = JSON.parse(fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`));

            timetable[week][day][time].inOptionWork_SubjectEE = subjectEE;
            timetable[week][day][time].inOptionWork_ClassroomEE = classroomEE;

            fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetable, null, 4));

            await interaction.update({
                content: `EE Option added to the timetable. Go to the ITEC Option`,
                components: [new ActionRowBuilder().addComponents(validateInOptionModalTerminalTech2)]
            });
        } else {
            await interaction.update({
                content: 'EE Option not added will you go to the ITEC Option ?',
                components: [new ActionRowBuilder().addComponents(validateInOptionModalTerminalTech2)]
            });
        }
    }
}