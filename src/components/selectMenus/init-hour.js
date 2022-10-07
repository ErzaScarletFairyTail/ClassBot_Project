const {SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder} = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-hour'
    },

    async execute(interaction, client) {

        const { setTimeTable } = client;

        // Create a new SelectMenuBuilder for select the type of work
        const menu = new SelectMenuBuilder()
            .setCustomId('init-worktype')
            .setPlaceholder('Select a type of work')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                new SelectMenuOptionBuilder()
                    .setLabel('In class')
                    .setValue('inclass')
                    .setDescription('Select this option if you want to configure a in class work'),
                new SelectMenuOptionBuilder()
                    .setLabel('In Group')
                    .setValue('ingroup')
                    .setDescription('Select this option if you want to configure a in group work'),
                new SelectMenuOptionBuilder()
                    .setLabel('In Option')
                    .setValue('inoption')
                    .setDescription('Select this option if you want to configure a in option work')
            ]);

        const row = new ActionRowBuilder()
            .addComponents(menu);

        switch (interaction.values[0]) {

            case '8':
                // add the hour in setTimeTable array
                setTimeTable.push('firsthour');

                await interaction.update({
                    content: 'Config the type of work:',
                    components: [row]
                });
                break;
            
            case '9':
                // add the hour in setTimeTable array
                setTimeTable.push('9:05');

                await interaction.update({
                    content: 'Config the type of work:',
                    components: [row]
                });
                break;
            
            case '10':
                // add the hour in setTimeTable array
                setTimeTable.push('10:15');

                await interaction.update({
                    content: 'Config the type of work:',
                    components: [row]
                });
                break;

            case '11':
                // add the hour in setTimeTable array
                setTimeTable.push('11:10');

                await interaction.update({
                    content: 'Config the type of work:',
                    components: [row]
                });
                break;
            
            case '12':

                if (!setTimeTable[1] === 'saturday') {
                    // add the hour in setTimeTable array
                    setTimeTable.push('12:30');

                    await interaction.update({
                        content: 'Config the type of work:',
                        components: [row]
                    });
                } else {
                    await interaction.update({
                        content: 'This hour is not available for saturday\nPlease select another hour',
                    });
                }
                break;

            case '13':

                if (!setTimeTable[1] === 'saturday') {
                    // add the hour in setTimeTable array
                    setTimeTable.push('13:25');

                    await interaction.update({
                        content: 'Config the type of work:',
                        components: [row]
                    });
                } else {
                    await interaction.update({
                        content: 'This hour is not available for saturday\nPlease select another hour',
                    });
                }
                break;
            
            case '14':

                if (!setTimeTable[1] === 'saturday') {
                    // add the hour in setTimeTable array
                    setTimeTable.push('14:25');

                    await interaction.update({
                        content: 'Config the type of work:',
                        components: [row]
                    });
                } else {
                    await interaction.update({
                        content: 'This hour is not available for saturday\nPlease select another hour',
                    });
                }
                break;

            case '15':

                if (!setTimeTable[1] === 'saturday') {
                    // add the hour in setTimeTable array
                    setTimeTable.push('15:30');

                    await interaction.update({
                        content: 'Config the type of work:',
                        components: [row]
                    });
                } else {
                    await interaction.update({
                        content: 'This hour is not available for saturday\nPlease select another hour',
                    });
                }
                break;

            case '16':

                if (!setTimeTable[1] === 'saturday') {
                    // add the hour in setTimeTable array
                    setTimeTable.push('16:25');

                    await interaction.update({
                        content: 'Config the type of work:',
                        components: [row]
                    });
                } else {
                    await interaction.update({
                        content: 'This hour is not available for saturday\nPlease select another hour',
                    });
                }
                break;

            default:
                break
        
        }

    }
};