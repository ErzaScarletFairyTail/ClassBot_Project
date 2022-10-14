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

                        //Create a role
                        interaction.guild.roles.create({
                            data: {
                                name: 'Groupe 1',
                                color: 'WHITE',
                                mentionable: true
                            }
                        });

                        interaction.guild.roles.create({
                            data: {
                                name: 'Groupe 2',
                                color: 'WHITE',
                                mentionable: true
                            }
                        });

                        interaction.guild.roles.create({
                            data: {
                                name: 'Groupe 3',
                                color: 'WHITE',
                                mentionable: true
                            }
                        });

                        interaction.guild.roles.create({
                            data: {
                                name: 'Groupe 4',
                                color: 'WHITE',
                                mentionable: true
                            }
                        });

                        // Get the role id
                        const roleGroupe1 = interaction.guild.roles.cache.find(role => role.name === 'Groupe 1');
                        const roleGroupe2 = interaction.guild.roles.cache.find(role => role.name === 'Groupe 2');
                        const roleGroupe3 = interaction.guild.roles.cache.find(role => role.name === 'Groupe 3');
                        const roleGroupe4 = interaction.guild.roles.cache.find(role => role.name === 'Groupe 4');

                        //Add to the timetable.json the id
                        timetablePremiereTech.data.groupe1 = roleGroupe1.id;
                        timetablePremiereTech.data.groupe2 = roleGroupe2.id;
                        timetablePremiereTech.data.groupe3 = roleGroupe3.id;
                        timetablePremiereTech.data.groupe4 = roleGroupe4.id;
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

        await interaction.guild.roles.create({
            name: 'Groupe A',
            color: Colors.White
        });

          await interaction.guild.roles.create({
            name: 'Groupe B',
            color: Colors.White
        });

        await interaction.guild.roles.create({
            name: 'SIN',
            color: Colors.White
          });

          await interaction.guild.roles.create({
            name: 'EE',
            color: Colors.White
          });

          await interaction.guild.roles.create({
            name: 'ITEC',
            color: Colors.White
          });


        // Get ID of the role 'Groupe A'
        const roleA = interaction.guild.roles.cache.find(role => role.name === 'Groupe A');
        // Get ID of the role 'Groupe B'
        const roleB = interaction.guild.roles.cache.find(role => role.name === 'Groupe B');

        //Get id of the role SIN
        const roleSIN = interaction.guild.roles.cache.find(role => role.name === 'SIN');
        //Get id of the role EE
        const roleEE = interaction.guild.roles.cache.find(role => role.name === 'EE');
        //Get id of the role ITEC
        const roleITEC = interaction.guild.roles.cache.find(role => role.name === 'ITEC');

        //Parse the data of ./src/data/${interaction.guild.id}/timetable.json

        const timetable = require(`../../data/${interaction.guild.id}/timetable.json`);

        timetable.data.groupeA = roleA.id;
        timetable.data.groupeB = roleB.id;
        timetable.data.SIN = roleSIN.id;
        timetable.data.EE = roleEE.id;
        timetable.data.ITEC = roleITEC.id;

        fs.writeFileSync(`./src/data/${interaction.guild.id}/timetable.json`, JSON.stringify(timetable));
        
    }
}
