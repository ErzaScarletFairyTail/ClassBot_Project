const {SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder} = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'setup-timetab'
    },

    async execute(interaction, client) {

        // Get data of ./src/data/${interaction.guild.id}/timetable.json and parse it
        const timetable = JSON.parse(fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`));


        const menu = new SelectMenuBuilder()
            .setCustomId('init-worktype')
            .setPlaceholder('Select a worktype')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                new SelectMenuOptionBuilder()
                    .setLabel('In Class')
                    .setValue('inclass')
                    .setDescription('Work in class'),
                new SelectMenuOptionBuilder()
                    .setLabel('In Group')
                    .setValue('ingroup')
                    .setDescription('Work in group'),
                new SelectMenuOptionBuilder()
                    .setLabel('In Option')
                    .setValue('inoption')
                    .setDescription('Work in option (ONLY FOR 1ER AND TERMINAL GENERAL OR 1ER AND TERMINAL TECHNOLOGY')
            ]);
        

        const row = new ActionRowBuilder()
            .addComponents(menu);

        await interaction.update({
            content: 'Config the timetable:',
            components: [row]
        });
        

    }
}