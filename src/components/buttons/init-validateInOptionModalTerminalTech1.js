const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-validateInOptionModalTerminalTech1'
    },

    async execute(interaction, client) {

        const inOptionModalTerminalTech2 = new ModalBuilder()
            .setTitle("Terminal Technologique EE Option")
            .setCustomId("init-inOptionModalTerminalTech2");

        const inOptionModalTerminalTechEESubject = new TextInputBuilder()
            .setCustomId("inOptionModalTerminalTechEESubject")
            .setLabel("Subject")
            .setPlaceholder("Subject")
            .setRequired(false)
            .setStyle(TextInputStyle.Short);

        const inOptionModalTerminalTechEEClassroom = new TextInputBuilder()
            .setCustomId("inOptionModalTerminalTechEEClassroom")
            .setLabel("Classroom")
            .setPlaceholder("Classroom")
            .setRequired(false)
            .setStyle(TextInputStyle.Short);

        inOptionModalTerminalTech2.addComponents(
            new ActionRowBuilder()
                .addComponents(inOptionModalTerminalTechEESubject),
            new ActionRowBuilder()
                .addComponents(inOptionModalTerminalTechEEClassroom)
        );

        await interaction.showModal(inOptionModalTerminalTech2);
    }
}