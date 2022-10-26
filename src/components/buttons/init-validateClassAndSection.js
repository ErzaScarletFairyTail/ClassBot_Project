const {SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder, Colors} = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-validateClassAndSection'
    },

    async execute(interaction, client) {

        const { classAndSection } = client;

        if(!fs.existsSync(`./src/data/${interaction.guild.id}`)) {
            fs.mkdirSync(`./src/data/${interaction.guild.id}`);
        }

        switch (classAndSection[0]) {
            case 'seconde':
                
                switch (classAndSection[1]) {
                    case 'general and technology':
                        
                        // Get data of ./src/assets/timetable/secondePatern.json
                        const secondeGenAndTech = require('../../assets/timetables/secondePatern.json');
                        // Write data in ./src/data/${interaction.guild.id}/timetable.json
                        fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(secondeGenAndTech));
                        // Get all data of ./src/data/${interaction.guild.id}/timetable.json
                        const timetableSeconde = require(`../../data/${interaction.guild.id}/timetable.json`);
                        // Write data in ./src/data/${interaction.guild.id}/timetable.json
                        timetableSeconde.data.class = classAndSection[0];
                        timetableSeconde.data.section = classAndSection[1];
                        fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetableSeconde));

                        await interaction.update({
                            content: 'Initialisation of the server done!\nPlease run ```/setup-timetab``` to configure the timetable!'
                        });

                        // Delete classAndSection array
                        classAndSection.splice(0, classAndSection.length);
                        break;
                    
                    default:

                        interaction.update({
                            content: 'You have to choose a general and technology section. \nPlease use the command again',
                            components: []
                        });
                        // Delete classAndSection array
                        classAndSection.splice(0, classAndSection.length);

                        // wait 5 seconds and delete the message
                        setTimeout(() => {
                            interaction.deleteReply();
                        }, 5000);
                        break;
                }
                break;

            case 'premiere':

                switch (classAndSection[1]) {
                    case 'general':

                        interaction.update({
                            content: 'This option is not available yet',
                            components: []
                        });
                        // Delete classAndSection array
                        classAndSection.splice(0, classAndSection.length);
                        break;

                    case 'technology':
                        // Get data of ./src/assets/timetable/premiereTechPatern.json
                        const premiereTech = require('../../assets/timetables/premiereTechPatern.json');
                        // Write data in ./src/data/${interaction.guild.id}/timetable.json
                        fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(premiereTech));
                        // Get all data of ./src/data/${interaction.guild.id}/timetable.json
                        const timetablePremiereTech = require(`../../data/${interaction.guild.id}/timetable.json`);
                        // Write data in ./src/data/${interaction.guild.id}/timetable.json
                        timetablePremiereTech.data.class = classAndSection[0];
                        timetablePremiereTech.data.section = classAndSection[1];
                        fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetablePremiereTech));

                        await interaction.update({
                            content: 'Initialisation of the server done!\nPlease run ```/setup-timetab``` to configure the timetable!'
                        });
                        // Delete classAndSection array
                        classAndSection.splice(0, classAndSection.length);
                        break;

                    default:

                        interaction.update({
                            content: 'You have to choose a general or technology section. \nPlease use the command again',
                            components: []
                        });
                        // Delete classAndSection array
                        classAndSection.splice(0, classAndSection.length);

                        // Delete the interaction
                        setTimeout(() => {
                            interaction.deleteReply();
                        }, 5000);
                        break;
                }
                break;

            case 'terminale':

                switch (classAndSection[1]) {
                    case 'general':

                        interaction.update({
                            content: 'This option is not available yet',
                            components: []
                        });
                        // Delete classAndSection array
                        classAndSection.splice(0, classAndSection.length);
                        break;

                    case 'technology':
                        // Get data of ./src/assets/timetable/terminaleTechPatern.json
                        const terminaleTech = require('../../assets/timetables/terminaleTechPatern.json');
                        // Write data in ./src/data/${interaction.guild.id}/timetable.json
                        fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(terminaleTech));
                        // Get all data of ./src/data/${interaction.guild.id}/timetable.json
                        const timetableTerminaleTech = require(`../../data/${interaction.guild.id}/timetable.json`);
                        // Write data in ./src/data/${interaction.guild.id}/timetable.json
                        timetableTerminaleTech.data.class = classAndSection[0];
                        timetableTerminaleTech.data.section = classAndSection[1];
                        fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetableTerminaleTech));

                        await interaction.update({
                            content: 'Initialisation of the server done!\nPlease run ```/setup-timetab``` to configure the timetable!',
                            components: []
                        });
                        // Delete classAndSection array
                        classAndSection.splice(0, classAndSection.length);
                        break;
                    
                    default:

                        interaction.update({
                            content: 'You have to choose a general or technology section. \nPlease use the command again',
                            components: []
                        });
                        // Delete classAndSection array
                        classAndSection.splice(0, classAndSection.length);

                        // Delete the interaction
                        setTimeout(() => {
                            interaction.delete();
                        }, 5000);
                        break;
                }
        
            default:
                break;
        }
    }
}
