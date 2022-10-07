const {SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder} = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-week'
    },

    async execute(interaction, client) {

        const { setTimeTable } = client;

        // Create a new SelectMenuBuilder for select the day
        const menu = new SelectMenuBuilder()
            .setCustomId('init-day')
            .setPlaceholder('Select a day')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                new SelectMenuOptionBuilder()
                    .setLabel('Monday')
                    .setValue('monday')
                    .setDescription('Select this option if you want to configure the monday'),
                new SelectMenuOptionBuilder()
                    .setLabel('Tuesday')
                    .setValue('tuesday')
                    .setDescription('Select this option if you want to configure the tuesday'),
                new SelectMenuOptionBuilder()
                    .setLabel('Wednesday')
                    .setValue('wednesday')
                    .setDescription('Select this option if you want to configure the wednesday'),
                new SelectMenuOptionBuilder()
                    .setLabel('Thursday')
                    .setValue('thursday')
                    .setDescription('Select this option if you want to configure the thursday'),
                new SelectMenuOptionBuilder()
                    .setLabel('Friday')
                    .setValue('friday')
                    .setDescription('Select this option if you want to configure the friday'),
                new SelectMenuOptionBuilder()
                    .setLabel('Saturday')
                    .setValue('saturday')
                    .setDescription('Select this option if you want to configure the saturday (Only Terminal)')
            ]);

        const row = new ActionRowBuilder()
            .addComponents(menu);

        switch (interaction.values[0]) {
            case 'even':

                // add the week in setTimeTable array
                setTimeTable.push('even');

                await interaction.update({
                    content: 'Config the day of the week:',
                    components: [row]
                });
                break;

            case 'odd':

                // add the week in setTimeTable array
                setTimeTable.push('odd');

                await interaction.update({
                    content: 'Config the day of the week:',
                    components: [row]
                });
        
            default:
                break;
        }
    }
}