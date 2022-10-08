const {SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder} = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-inClassModal'
    },
    async execute(interaction, client) {

        const week = interaction.fields.getTextInputValue("inClassTextInputWeek");
        const day = interaction.fields.getTextInputValue("inClassTextInputDay");
        const time = interaction.fields.getTextInputValue("inClassTextInputTime");
        const subject = interaction.fields.getTextInputValue("inClassTextInputSubject");
        const classroom = interaction.fields.getTextInputValue("inClassTextInputClassroom");

        // Open the file timetable.json from the server folder
        const timetable = JSON.parse(fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`));

        // Add the new in class work to the timetable
        timetable[week][day][time].inClassWork.Subject = subject;
        timetable[week][day][time].inClassWork.Classroom = classroom;

        // Write the new timetable to the file timetable.json
        fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetable, null, 4));

        // Send a message to the user
        await interaction.reply({
            content: `Added ${subject} in ${classroom} on ${day} at ${time} to the timetable`
        });
    }
};