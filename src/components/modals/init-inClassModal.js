const {SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder} = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-inClassModal'
    },
    async execute(interaction, client) {

        const { setTimeTable } = client;
        console.log(setTimeTable);
        //[ 'even', 'Monday', 'firsthour' ]
        const week = setTimeTable[0];
        const day = setTimeTable[1];
        const hour = setTimeTable[2];

        /*
        // open the file with the timetable
        const servTimetable = JSON.parse(fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`, 'utf8'));


        switch (week) {
            case "even":
                
                switch (day) {
                    case "monday":

                        switch (hour) {
                            case "firsthour":
                                servTimetable.even.monday.firsthour = { subject: interaction.fields.getTextInputValue("inClassTextInputSubject") , classroom: interaction.fields.getTextInputValue("inClassTextInputClassroom") };
                                fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(servTimetable));

                                interaction.reply({
                                    content: `You write: ${interaction.fields.getTextInputValue("inClassTextInputSubject")} in the classroom ${interaction.fields.getTextInputValue("inClassTextInputClassroom")}`
                                });
                                break;
                            case "secondhour":
                                break;
                        }
                        break;
                    case "tuesday":
                        break;
                    case "wednesday":
                        break;
                    case "thursday":
                        break;
                    case "friday":
                        break;
                    default:
                        break;
                }
                break;
            
            case "odd":

                break;
        
            default:
                break;
        }
        */

    }
};