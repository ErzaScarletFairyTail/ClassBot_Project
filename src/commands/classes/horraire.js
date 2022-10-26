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
        const week = Math.floor((new Date().getTime() - new Date('2021-09-01').getTime()) / 604800000) % 2;
        // Get the day of the week
        const getDay = new Date().getDay();
        // Get the hour
        const hour = interaction.options.getString('heure'); // Get the option value

        // Wich day is it?
        let day;
        switch (getDay) {
            case 1:
                day = 'MONDAY';
                break;
            case 2:
                day = 'TUESDAY';
                break;
            case 3:
                day = 'WEDNESDAY';
                break;
            case 4:
                day = 'THURSDAY';
                break;
            case 5:
                day = 'FRIDAY';
                break;
            case 6:
                day = 'SATURDAY';
                break;
            default:
                day = 'SUNDAY';
                break;
        }

        
        // Open the file timetable.json from the server folder
        const timetable = JSON.parse(fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`));

        // type of work
        let type;
        switch (timetable[week ? 'EVEN' : 'ODD'][day][hour].type) {
            case 'inClassWork':
                type = 'inClassWork';
                break;
            case 'inGroupWork':
                type = 'inGroupWork';
                break;
            case 'inOptionWork':
                type = 'inOptionWork';
                break;
            default:
                break;
        }

        // Ckeck the day
        if (day === 'SATURDAY') {
            //Check the class
            if (timetable.data.class === 'terminale') {
                // check the hour
                if (hour === 'M1' || hour === 'M2' || hour === 'M3' || hour === 'M4') {
                    if(type == 'free'){
                        await interaction.reply(`Vous n'aurez pas de cours à ${hour} aujourd'hui!`);
                    }else{
                        if (type === 'inClassWork') {
                            const subject = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].Subject;
                            const classroom = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].Classroom;

                            await interaction.reply(`Vous aurez ${subject} en ${classroom} en ${hour} aujourd'hui!`);
                        } else if (type === 'inGroupWork') {
                            const subjectGrpA = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].groupA.Subject;
                            const classroomGrpA = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].groupA.Classroom;
                            const subjectGrpB = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].groupB.Subject;
                            const classroomGrpB = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].groupB.Classroom;

                            await interaction.reply(`Vous aurez ${subjectGrpA} en ${classroomGrpA} et ${subjectGrpB} en ${classroomGrpB} en ${hour} aujourd'hui!`);
                        } else {
                            await interaction.reply(`None`);
                        }
                    }
                } else {
                    // Send the message
                    await interaction.reply(`L'heure ${hour} n'existe pas le samedi`);
                }
            } else {
                // Send the message
                await interaction.reply(`Vous n'avez pas cours le samedi`);
            }
        } else if (day === 'SUNDAY') {
            // Send the message
            await interaction.reply(`Vous n'avez pas cours le dimanche`);
        } else {
            if (type === 'inClassWork') {
                const subject = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].Subject;
                const classroom = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].Classroom;

                await interaction.reply(`Vous aurez ${subject} en ${classroom} en ${hour} aujourd'hui!`);
            } else if (type === 'inGroupWork') {
                const subjectGrpA = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].groupA.Subject;
                const classroomGrpA = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].groupA.Classroom;
                const subjectGrpB = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].groupB.Subject;
                const classroomGrpB = timetable[week ? 'EVEN' : 'ODD'][day][hour][type].groupB.Classroom;

                await interaction.reply(`Vous aurez ${subjectGrpA} en ${classroomGrpA} et ${subjectGrpB} en ${classroomGrpB} en ${hour} aujourd'hui!`);
            } else {
                await interaction.reply(`Vous n'aurez pas de cours à ${hour} aujourd'hui!`);
            }
        }
    }
};