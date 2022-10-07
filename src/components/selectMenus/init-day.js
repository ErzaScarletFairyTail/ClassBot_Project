const {SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder} = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-day'
    },

    async execute(interaction, client) {

        const { setTimeTable } = client;

        // Create a new SelectMenuBuilder for select the hour
        const menu = new SelectMenuBuilder()
            .setCustomId('init-hour')
            .setPlaceholder('Select a hour')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                new SelectMenuOptionBuilder()
                    .setLabel('8h10 - 9h05')
                    .setValue('8')
                    .setDescription('Select this option if you want to configure the 8h10 - 9h05'),
                new SelectMenuOptionBuilder()
                    .setLabel('9h10 - 10h00')
                    .setValue('9')
                    .setDescription('Select this option if you want to configure the 9h10 - 10h00'),
                new SelectMenuOptionBuilder()
                    .setLabel('10h15 - 11h10')
                    .setValue('10')
                    .setDescription('Select this option if you want to configure the 10h15 - 11h10'),
                new SelectMenuOptionBuilder()
                    .setLabel('11h10 - 12h05')
                    .setValue('11')
                    .setDescription('Select this option if you want to configure the 11h10 - 12h05'),
                new SelectMenuOptionBuilder()
                    .setLabel('12h30 - 13h25')
                    .setValue('12')
                    .setDescription('Select this option if you want to configure the 12h30 - 13h25 (Only Terminal General)'),
                new SelectMenuOptionBuilder()
                    .setLabel('13h25 - 14h25')
                    .setValue('13')
                    .setDescription('Select this option if you want to configure the 13h25 - 14h25'),
                new SelectMenuOptionBuilder()
                    .setLabel('14h25 - 15h15')
                    .setValue('14')
                    .setDescription('Select this option if you want to configure the 14h25 - 15h15'),
                new SelectMenuOptionBuilder()
                    .setLabel('15h30 - 16h25')
                    .setValue('15')
                    .setDescription('Select this option if you want to configure the 15h30 - 16h25'),
                new SelectMenuOptionBuilder()
                    .setLabel('16h25 - 17h20')
                    .setValue('16')
                    .setDescription('Select this option if you want to configure the 16h25 - 17h20')
            ]);

        const row = new ActionRowBuilder()
            .addComponents(menu);

        switch (interaction.values[0]) {
            case 'monday':
                setTimeTable.push('Monday');

                await interaction.update({
                    content: 'Config the hour of the day:',
                    components: [row]
                });
                break;

            case 'tuesday':
                setTimeTable.push('tuesday');

                await interaction.update({
                    content: 'Config the hour of the day:',
                    components: [row]
                });
                break;

            case 'wednesday':
                setTimeTable.push('wednesday');

                await interaction.update({
                    content: 'Config the hour of the day:',
                    components: [row]
                });
                break;

            case 'thursday':
                setTimeTable.push('thursday');

                await interaction.update({
                    content: 'Config the hour of the day:',
                    components: [row]
                });
                break;

            case 'friday':
                setTimeTable.push('friday');

                await interaction.update({
                    content: 'Config the hour of the day:',
                    components: [row]
                });
                break;

            case 'saturday':
                // open the time tabl from the server
                const timeTable = require(`../../data/${interaction.guild.id}/timetable.json`);

                // check if the class is terminal
                if (timeTable.class === 'Terminal') {
                    setTimeTable.push('saturday');

                    await interaction.update({
                        content: 'Config the hour of the day:',
                        components: [row]
                    });
                } else {
                    await interaction.update({
                        content: 'The saturday is only for the Terminal class\nPlease select another day'
                    });
                }
                break;

            default:
                break;
        }
    }
};