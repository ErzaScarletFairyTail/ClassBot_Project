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
        // Get the week
        if (getWeek == 0) {
            week = "ODD";
        } else {
            week = "EVEN";
        }
        // Get the type
        const dayTimeTable = timetable[week][day.toUpperCase()][hour];
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
        
        // Create free embed
        const freeEmbed = {
            color: 0x0099ff,
            title: `Horraire de ${hour}`,
            timestamp: new Date(),
            footer: {
                text: 'Horraire',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };

        // Create inClassWork embed
        const inClassWorkEmbed = {
            color: 0x0099ff,
            title: `Horraire de ${hour}`,
            description: `Cours en classe de ${inClassSubject} en ${inClassClassroom}`,
            timestamp: new Date(),
            footer: {
                text: 'Horraire',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };

        // Create inGroupWorkA embed
        const inGroupWorkAEmbed = {
            color: 0x0099ff,
            title: `Horraire de ${hour}`,
            description: `Cours en groupe A de ${inGroupSubjectA} en ${inGroupClassroomA}`,
            timestamp: new Date(),
            footer: {
                text: 'Horraire',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };

        // Create inGroupWorkB embed
        const inGroupWorkBEmbed = {
            color: 0x0099ff,
            title: `Horraire de ${hour}`,
            description: `Cours en groupe B de ${inGroupSubjectB} en ${inGroupClassroomB}`,
            timestamp: new Date(),
            footer: {
                text: 'Horraire',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };

        // Create inOptionWorkSIN embed
        const inOptionWorkSINEmbed = {
            color: 0x0099ff,
            title: `Horraire de ${hour}`,
            description: `Cours en option SIN de ${inOptionSubjectSIN} en ${inOptionClassroomSIN}`,
            timestamp: new Date(),
            footer: {
                text: 'Horraire',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };

        // Create inOptionWorkEE embed
        const inOptionWorkEEEmbed = {
            color: 0x0099ff,
            title: `Horraire de ${hour}`,
            description: `Cours en option EE de ${inOptionSubjectEE} en ${inOptionClassroomEE}`,
            timestamp: new Date(),
            footer: {
                text: 'Horraire',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };

        // Create inOptionWorkITEC embed
        const inOptionWorkITECEmbed = {
            color: 0x0099ff,
            title: `Horraire de ${hour}`,
            description: `Cours en option ITEC de ${inOptionSubjectITEC} en ${inOptionClassroomITEC}`,
            timestamp: new Date(),
            footer: {
                text: 'Horraire',
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };

        // Verify if the hour is free or not
        if (dayTimeTable.type == undefined) {
            interaction.reply({ embeds: [freeEmbed] });
        } else {
            // verify string
            switch (dayTimeTable.type) {
                case 'inClassWork':
                    interaction.reply({ embeds: [inClassWorkEmbed] });
                    break;
                case 'inGroupWork':
                    if(inGroupSubjectA != undefined && inGroupSubjectB == undefined){
                        interaction.reply({ embeds: [inGroupWorkAEmbed] });
                    }
                    if(inGroupSubjectB != undefined && inGroupSubjectA == undefined){
                        interaction.reply({ embeds: [inGroupWorkBEmbed] });
                    }
                    if(inGroupSubjectA != undefined && inGroupSubjectB != undefined){
                        interaction.reply({ embeds: [inGroupWorkAEmbed, inGroupWorkBEmbed] });
                    }
                    break;
                case 'inOptionWork':
                    if(inOptionSubjectSIN != undefined && inOptionSubjectEE == undefined && inOptionSubjectITEC == undefined){
                        interaction.reply({ embeds: [inOptionWorkSINEmbed] });
                        console.log("SIN");
                    }
                    if(inOptionSubjectEE != undefined && inOptionSubjectSIN == undefined && inOptionSubjectITEC == undefined){
                        interaction.reply({ embeds: [inOptionWorkEEEmbed] });
                        console.log("EE");
                    }
                    if(inOptionSubjectITEC != undefined && inOptionSubjectSIN == undefined && inOptionSubjectEE == undefined){
                        interaction.reply({ embeds: [inOptionWorkITECEmbed] });
                        console.log("ITEC");
                    }
                    if(inOptionSubjectSIN != undefined && inOptionSubjectEE != undefined && inOptionSubjectITEC == undefined){
                        interaction.reply({ embeds: [inOptionWorkSINEmbed, inOptionWorkEEEmbed] });
                        console.log("SIN & EE");
                    }
                    if(inOptionSubjectSIN != undefined && inOptionSubjectEE == undefined && inOptionSubjectITEC != undefined){
                        interaction.reply({ embeds: [inOptionWorkSINEmbed, inOptionWorkITECEmbed] });
                        console.log("SIN & ITEC");
                    }
                    if(inOptionSubjectSIN == undefined && inOptionSubjectEE != undefined && inOptionSubjectITEC != undefined){
                        interaction.reply({ embeds: [inOptionWorkEEEmbed, inOptionWorkITECEmbed] });
                        console.log("EE & ITEC");
                    }
                    if(inOptionSubjectSIN != undefined && inOptionSubjectEE != undefined && inOptionSubjectITEC != undefined){
                        interaction.reply({ embeds: [inOptionWorkSINEmbed, inOptionWorkEEEmbed, inOptionWorkITECEmbed] });
                        console.log("SIN & EE & ITEC");
                    }
                    break;
                default:
                    break;
            }
        }
    }

}