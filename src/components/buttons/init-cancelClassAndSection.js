const {SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder} = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-cancelClassAndSection'
    },

    async execute(interaction, client) {

        const { classAndSection } = client;

        if(!fs.existsSync(`./src/data/${interaction.guild.id}`)) {
            fs.mkdirSync(`./src/data/${interaction.guild.id}`);
        }

        await interaction.update({
            content: 'You have canceled the class and section selection process\nPlease use the command again',
            components: []
        });
        // Delete classAndSection array
        classAndSection.splice(0, classAndSection.length);

        // wait 5 seconds and delete the message
        setTimeout(() => {
            interaction.deleteReply();
        }, 5000);
    }
}