const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-validateInOptionModalTerminalTech2'
    },

    async execute(interaction, client) {

        const inOptionModalTerminalTech3 = new ModalBuilder()
            .setTitle("Terminal Technologique ITEC Option")
            .setCustomId("init-inOptionModalTerminalTech3");

        const inOptionModalTerminalTechITECSubject = new TextInputBuilder()
            .setCustomId("inOptionModalTerminalTechITECSubject")
            .setLabel("Subject")
            .setPlaceholder("Subject")
            .setRequired(false)
            .setStyle(TextInputStyle.Short);

        const inOptionModalTerminalTechITECClassroom = new TextInputBuilder()
            .setCustomId("inOptionModalTerminalTechITECClassroom")
            .setLabel("Classroom")
            .setPlaceholder("Classroom")
            .setRequired(false)
            .setStyle(TextInputStyle.Short);

        inOptionModalTerminalTech2.addComponents(
            new ActionRowBuilder()
                .addComponents(inOptionModalTerminalTechITECSubject),
            new ActionRowBuilder()
                .addComponents(inOptionModalTerminalTechITECClassroom)
        );

        await interaction.showModal(inOptionModalTerminalTech3);
    }
}