const {SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder} = require('discord.js');

module.exports = {
    data: {
        name: 'init-whichclass'
    },
    async execute(interaction, client) {
        
        const { classAndSection } = client;

        const menu = new SelectMenuBuilder()
            .setCustomId('init-whichsection')
            .setPlaceholder('Select a section')
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([
                new SelectMenuOptionBuilder()
                    .setLabel('General and Technology section')
                    .setValue('genandtech')
                    .setDescription('Select this option if you are in Seconde'),
                new SelectMenuOptionBuilder()
                    .setLabel('General section')
                    .setValue('general')
                    .setDescription('Select this option if you are in Première generale or Terminale generale'),
                new SelectMenuOptionBuilder()
                    .setLabel('Technology section')
                    .setValue('technology')
                    .setDescription('Select this option if you are in Première technologique or Terminale technologique')
            ]);

        switch (interaction.values[0]) {

            case 'seconde':
                classAndSection.push('seconde');

                await interaction.update({
                    content: 'Config the section Server:',
                    components: [new ActionRowBuilder().addComponents(menu)]
                });
                break;

            case 'premiere':
                classAndSection.push('premiere');

                await interaction.update({
                    content: 'Config the section Server:',
                    components: [new ActionRowBuilder().addComponents(menu)]
                });
                break;

            case 'terminale':
                classAndSection.push('terminale');

                await interaction.update({
                    content: 'Config the section Server:',
                    components: [new ActionRowBuilder().addComponents(menu)]
                });
                break;
                
            default:
                break;
        }
    }
}