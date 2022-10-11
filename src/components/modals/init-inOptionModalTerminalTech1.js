const { ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-inOptionModalTerminalTech1'
    },

    async execute(interaction, client) {

        const { inoptionwork } = client;

        // Validate Button and Cancel
        const validateInOptionModalTerminalTech1 = new ButtonBuilder()
            .setCustomId("init-validateInOptionModalTerminalTech1")
            .setLabel("Validate")
            .setStyle(ButtonStyle.Success);


        const week = inoptionwork[0];
        const day = inoptionwork[1];
        const time = inoptionwork[2];
        const subjectSIN = interaction.fields.getTextInputValue("inOptionModalTerminalTechSINSubject");
        const classroomSIN = interaction.fields.getTextInputValue("inOptionModalTerminalTechSINClassroom");

        if(subjectSIN != "" && classroomSIN != ""){
            // Open the timetable of the server
            const timetable = JSON.parse(fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`));

            timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inOptionWork.SIN.Subject = subjectSIN;
            timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inOptionWork.SIN.Classroom = classroomSIN;

            fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetable, null, 4));

            await interaction.update({
                content: `SIN Option added to the timetable. Go to the EE Option`,
                components: [new ActionRowBuilder().addComponents(validateInOptionModalTerminalTech1)]
            });
        } else {
            await interaction.update({
                content: 'SIN Option not added will you go to the EE Option ?',
                components: [new ActionRowBuilder().addComponents(validateInOptionModalTerminalTech1)]
            });
        }
    }
}