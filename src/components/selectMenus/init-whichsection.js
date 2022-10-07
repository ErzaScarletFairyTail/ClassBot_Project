const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'init-whichsection'
    },

    async execute(interaction, client) {

        const { classAndSection } = client;
        
        const vaidateButton = new ButtonBuilder()
            .setCustomId('init-validateClassAndSection')
            .setLabel('Validate')
            .setStyle(ButtonStyle.Success);

        const cancelButton = new ButtonBuilder()
            .setCustomId('init-cancelClassAndSection')
            .setLabel('Cancel')
            .setStyle(ButtonStyle.Danger);

        const row = new ActionRowBuilder()
            .addComponents(vaidateButton, cancelButton);

        switch (interaction.values[0]) {

            case 'genandtech':
                classAndSection.push('general and technology');

                await interaction.update({
                    content: `Please confirm that you are in ${classAndSection[0]} ${classAndSection[1]} section`,
                    components: [row]
                });
                break;

            case 'general':
                classAndSection.push('general');

                await interaction.update({
                    content: `Please confirm that you are in ${classAndSection[0]} ${classAndSection[1]} section`,
                    components: [row]
                });
                break;

            case 'technology':
                classAndSection.push('technology');

                await interaction.update({
                    content: `Please confirm that you are in ${classAndSection[0]} ${classAndSection[1]} section`,
                    components: [row]
                });
                break;

            default:
                break;
        }
    }
}