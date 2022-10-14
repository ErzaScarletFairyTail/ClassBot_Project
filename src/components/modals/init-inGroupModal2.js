const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-inGroupModal2'
    },

    async execute(interaction, client) {
        const {ingroupwork} = client;

        const week = ingroupwork[0];
        const day = ingroupwork[1];
        const time = ingroupwork[2];
        const subjectGrpA = interaction.fields.getTextInputValue("inGroupTextInputSubjectGroupA");
        const classroomGrpA = interaction.fields.getTextInputValue("inGroupTextInputClassroomGroupA");
        const subjectGrpB = interaction.fields.getTextInputValue("inGroupTextInputSubjectGroupB");
        const classroomGrpB = interaction.fields.getTextInputValue("inGroupTextInputClassroomGroupB");

        // Open the file timeTable.json from the folder data/${interaction.guild.id}

        const timetable = JSON.parse(fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`));

        // verify if the day is saturday
        if (day.toUpperCase() === "SATURDAY") {

            if(timetable.data.class == "terminale") {

                if(time.toUpperCase() == "M1" || time.toUpperCase() == "M2" || time.toUpperCase() == "M3" || time.toUpperCase() == "M4") {

                    // check if the group A is not empty
                    if (subjectGrpA != "" && classroomGrpA != "") {
                        timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inGroupWork.groupA.Subject = subjectGrpA;
                        timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inGroupWork.groupA.Classroom = classroomGrpA;

                        // Write the new timetable to the file timetable.json
                        fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetable, null, 4));
                    }

                    // check if the group B is not empty
                    if (subjectGrpB != "" && classroomGrpB != "") {
                        timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inGroupWork.groupB.Subject = subjectGrpB;
                        timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inGroupWork.groupB.Classroom = classroomGrpB;

                        // Write the new timetable to the file timetable.json
                        fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetable, null, 4));
                    }

                    // Send a message to the user
                    await interaction.update({
                        content: `The work has been added to the timetable for ${week} ${day} ${time}`,
                        components: []
                    }); 
                }
            } else {
                interaction.update({
                    content: `The work has not been added to the timetable for ${week} ${day} ${time} because the class is not terminal`,
                    components: []
                });
            }
            
        } else {

            // check if the group A is not empty
            if (subjectGrpA != "" && classroomGrpA != "") {
                timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inGroupWork.groupA.Subject = subjectGrpA;
                timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inGroupWork.groupA.Classroom = classroomGrpA;

                // Write the new timetable to the file timetable.json
                fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetable, null, 4));
            }

            // check if the group B is not empty
            if (subjectGrpB != "" && classroomGrpB != "") {
                timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inGroupWork.groupB.Subject = subjectGrpB;
                timetable[week.toUpperCase()][day.toUpperCase()][time.toUpperCase()].inGroupWork.groupB.Classroom = classroomGrpB;

                // Write the new timetable to the file timetable.json
                fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetable, null, 4));
            }

            // Send a message to the user
            await interaction.update({
                content: `The work has been added to the timetable for ${week} ${day} ${time}`+"\nTo continue the creation of the timetable, rerun the command ```/setup-timetable```",
                components: []
            });
        }
    }
}