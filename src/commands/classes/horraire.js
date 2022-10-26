const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('horraire') // Set the name of the command
        .setDescription('Retourne un horraire!') // Set the description of the command
        .addStringOption(option => option
            .setName('heure')
            .setDescription('Choisir l\'horrraire')
            .setAutocomplete(true)
            .setRequired(true)
        ),
    async autocomplete(interaction, client) {
        const focusedValue = interaction.options.getFocused();
		const choices = ['M1', 'M2', 'M3', 'M4', 'M5', 'S1', 'S2', 'S3', 'S4'];
		const filtered = choices.filter(choice => choice.startsWith(focusedValue));
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
    },
    async execute(interaction, client) { // Execute the command
        // Is the week even or odd?
        const getWeek = Math.floor((new Date().getTime() - new Date('2021-09-01').getTime()) / 604800000) % 2;
        // Get the day of the week in letters
        const day = new Date().toLocaleString('en-EN', { weekday: 'long' });
        // Get the hour
        const hour = interaction.options.getString('heure'); // Get the option value
        //Init variables
        let week = "";
        let free = "Cours libre";
        let inClassSubject = '';
        let inClassClassroom = '';
        let inGroupSubjectA = '';
        let inGroupClassroomA = '';
        let inGroupSubjectB = '';
        let inGroupClassroomB = '';
        let inOptionSubjectSIN = '';
        let inOptionClassroomSIN = '';
        let inOptionSubjectEE = '';
        let inOptionClassroomEE = '';
        let inOptionSubjectITEC = '';
        let inOptionClassroomITEC = '';

        // Open the file timetable.json from the server folder
        const timetable = JSON.parse(fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`));
        console.log(timetable);
        // Get the week
        if (getWeek == 0) {
            week = "ODD";
        } else {
            week = "EVEN";
        }
        // Get the type
        const dayTimeTable = timetable[week][day.toUpperCase()][hour];
        console.log(dayTimeTable);
        // Get the hour type
        switch (dayTimeTable.type) {
            case 'inClassWork':
                inClassSubject = dayTimeTable.inClassWork_Subject;
                inClassClassroom = dayTimeTable.inClassWork_Classroom;
                break;
            case 'inGroupWork':
                inGroupSubjectA = dayTimeTable.inGroupWork_SubjectA;
                inGroupClassroomA = dayTimeTable.inGroupWork_ClassroomA;
                inGroupSubjectB = dayTimeTable.inGroupWork_SubjectB;
                inGroupClassroomB = dayTimeTable.inGroupWork_ClassroomB;
                break;
            case 'inOptionWork':
                inOptionSubjectSIN = dayTimeTable.inOptionWork_SubjectSIN;
                inOptionClassroomSIN = dayTimeTable.inOptionWork_ClassroomSIN;
                inOptionSubjectEE = dayTimeTable.inOptionWork_SubjectEE;
                inOptionClassroomEE = dayTimeTable.inOptionWork_ClassroomEE;
                inOptionSubjectITEC = dayTimeTable.inOptionWork_SubjectITEC;
                inOptionClassroomITEC = dayTimeTable.inOptionWork_ClassroomITEC;
                break;

            default:
                break;
        }

        // Send the embed
        await interaction.reply({
            embeds: [{
                title: `Horraire de ${hour}`,
                description: `Semaine ${week ? 'impair' : 'pair'}\nJour ${day}`,
                fields: [
                    {
                        name: 'Cours en classe',
                        value: inClassSubject ? `${inClassSubject} - ${inClassClassroom}` : free,
                        inline: true
                    },
                    {
                        name: 'Travail en groupe',
                        value: inGroupSubjectA ? `${inGroupSubjectA} - ${inGroupClassroomA}\n${inGroupSubjectB} - ${inGroupClassroomB}` : free,
                        inline: true
                    },
                    {
                        name: 'Travail en option',
                        value: inOptionSubjectSIN ? `${inOptionSubjectSIN} - ${inOptionClassroomSIN}\n${inOptionSubjectEE} - ${inOptionClassroomEE}\n${inOptionSubjectITEC} - ${inOptionClassroomITEC}` : free,
                        inline: true
                    }
                ]
            }]
        });
        // await interaction.reply({
        //     content:'test'
        // });
    }
};