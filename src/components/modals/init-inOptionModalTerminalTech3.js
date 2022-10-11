const { ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-inOptionModalTerminalTech3'
    },

    async execute(interaction, client) {

        const { inoptionwork } = client;

        // Validate Button and Cancel
        const validateInOptionModalTerminalTech3 = new ButtonBuilder()
            .setCustomId("init-validateInOptionModalTerminalTech3")
            .setLabel("Validate")
            .setStyle(ButtonStyle.Success);

        const week = inoptionwork[0];
        const day = inoptionwork[1];
        const time = inoptionwork[2];
        const subjectITEC = interaction.fields.getTextInputValue("inOptionModalTerminalTechITECSubject");
        const classroomITEC = interaction.fields.getTextInputValue("inOptionModalTerminalTechITECClassroom");

        if(subjectEE != "" && classroomEE != ""){
            // Open the timetable of the server
            const timetable = JSON.parse(fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`));

            timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inOptionWork.ITEC.Subject = subjectITEC;
            timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inOptionWork.ITEC.Classroom = classroomITEC;

            fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetable, null, 4));

            await interaction.update({
                content: `ITEC Option added to the timetable. Validate to complete the process!`,
                components: [new ActionRowBuilder().addComponents(validateInOptionModalTerminalTech3)]
            });
        } else {
            await interaction.update({
                content: 'ITEC Option not added. Validate to finish the process!',
                components: [new ActionRowBuilder().addComponents(validateInOptionModalTerminalTech3)]
            });
        }
    }
}