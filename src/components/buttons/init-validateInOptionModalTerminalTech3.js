const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-validateInOptionModalTerminalTech3'
    },

    async execute(interaction, client) {

        const { inoptionwork } = client;

        // reset the inoptionwork object
        inoptionwork.splice(0, inoptionwork.length);

        await interaction.update({
            content: 'You have successfully validated the option work!',
            components: []
        });
    }
}