const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-inOptionModal1'
    },

    async execute(interaction, client) {

        const { inoptionwork } = client;

        const week = interaction.fields.getTextInputValue("inOptionTextInputWeek");
        const day = interaction.fields.getTextInputValue("inOptionTextInputDay");
        const time = interaction.fields.getTextInputValue("inOptionTextInputTime");

        inoptionwork.push(week, day, time);

        const validateButton = new ButtonBuilder()
            .setCustomId('init-validateInOptionModal1')
            .setLabel('Validate')
            .setStyle(ButtonStyle.Success);

        const cancelButton = new ButtonBuilder()
            .setCustomId('init-cancelInOptionModal1')
            .setLabel('Cancel')
            .setStyle(ButtonStyle.Danger);

        const row = new ActionRowBuilder()
            .addComponents(validateButton, cancelButton);

        await interaction.update({
            content: `Please confirm that you want to config: ${week} ${day} ${time}`,
            components: [row]
        });
    }
}