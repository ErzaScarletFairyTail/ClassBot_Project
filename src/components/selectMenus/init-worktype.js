const {SelectMenuBuilder,  SelectMenuOptionBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-worktype'
    },

    async execute(interaction, client) {

        switch (interaction.values[0]) {
            case "inclass":
                const inClassModal = new ModalBuilder()
                    .setTitle("In class")
                    .setCustomId("init-inClassModal");
                
                const inClassTextInputWeek = new TextInputBuilder()
                    .setCustomId("inClassTextInputWeek")
                    .setLabel("Week")
                    .setPlaceholder("Week (Even or Odd)")
                    .setStyle(TextInputStyle.Short);

                const inClassTextInputDay = new TextInputBuilder()
                    .setCustomId("inClassTextInputDay")
                    .setLabel("Day")
                    .setPlaceholder("Day (Monday, Tuesday, Wednesday, Thursday, Friday)")
                    .setStyle(TextInputStyle.Short);

                const inClassTextInputTime = new TextInputBuilder()
                    .setCustomId("inClassTextInputTime")
                    .setLabel("Time")
                    .setPlaceholder("Time (M1, M2, M3, M4, M5, S1, S2, S3, S4)")
                    .setStyle(TextInputStyle.Short);

                const inClassTextInputSubject = new TextInputBuilder()
                    .setCustomId("inClassTextInputSubject")
                    .setLabel("Subject")
                    .setPlaceholder("Subject")
                    .setStyle(TextInputStyle.Short);

                const inClassTextInputClassroom = new TextInputBuilder()
                    .setCustomId("inClassTextInputClassroom")
                    .setLabel("Classroom")
                    .setPlaceholder("Classroom")
                    .setStyle(TextInputStyle.Short);

                inClassModal.addComponents(
                    new ActionRowBuilder()
                        .addComponents(inClassTextInputWeek),
                    new ActionRowBuilder()
                        .addComponents(inClassTextInputDay),
                    new ActionRowBuilder()
                        .addComponents(inClassTextInputTime),
                    new ActionRowBuilder()
                        .addComponents(inClassTextInputSubject),
                    new ActionRowBuilder()
                        .addComponents(inClassTextInputClassroom)
                );

                await interaction.showModal(inClassModal);

                break;

            default:
                break;

        }

    }
}

        
