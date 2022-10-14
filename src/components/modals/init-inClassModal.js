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

        
        // IF THE DAY IS SATURDAY CHECK IF THE CLASS IS TERMINAL AND THE TIME IS BEETWEEN M1-M4
        if (day.toUpperCase() === "SATURDAY" && timetable.data.class == "terminale") {

            if(time.toUpperCase() == "M1" || time.toUpperCase() == "M2" || time.toUpperCase() == "M3" || time.toUpperCase() == "M4") {

                timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inClassWork.Subject = subject;
                timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inClassWork.Classroom = classroom;
    
                // Write the new timetable to the file timetable.json
                fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetable, null, 4));
    
                // Send a message to the user
                await interaction.update({
                    content: `The work has been added to the timetable for ${week} ${day} ${time}`+'\nChoose a option to continu the configuration:',
                    components: []
                }); 
            }
            


        } else {
                interaction.update({
                    content: `The work has not been added to the timetable for ${week} ${day} ${time} because the class is not terminal`,
                    components: []
                });
        }

        if(!day.toUpperCase() === "SATURDAY" ) {

            // Add the new in class work to the timetable
            timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inClassWork.Subject = subject;
            timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inClassWork.Classroom = classroom;

            // Write the new timetable to the file timetable.json
            fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetable, null, 4));

            // Send a message to the user
            await interaction.update({
                content: `The work has been added to the timetable for ${week} ${day} ${time}`,
                components: []
            });
        }
    }
};