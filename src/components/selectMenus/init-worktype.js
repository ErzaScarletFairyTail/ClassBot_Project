const { ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
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
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short);

                const inClassTextInputDay = new TextInputBuilder()
                    .setCustomId("inClassTextInputDay")
                    .setLabel("Day")
                    .setPlaceholder("Day (Monday, Tuesday, Wednesday, Thursday, Friday)")
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short);

                const inClassTextInputTime = new TextInputBuilder()
                    .setCustomId("inClassTextInputTime")
                    .setLabel("Time")
                    .setPlaceholder("Time (M1, M2, M3, M4, M5, S1, S2, S3, S4)")
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short);

                const inClassTextInputSubject = new TextInputBuilder()
                    .setCustomId("inClassTextInputSubject")
                    .setLabel("Subject")
                    .setPlaceholder("Subject")
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short);

                const inClassTextInputClassroom = new TextInputBuilder()
                    .setCustomId("inClassTextInputClassroom")
                    .setLabel("Classroom")
                    .setPlaceholder("Classroom")
                    .setRequired(true)
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

            case "ingroup":
                const inGroupModal1 = new ModalBuilder()
                    .setTitle("In group")
                    .setCustomId("init-inGroupModal1");

                const inGroupTextInputWeek = new TextInputBuilder()
                    .setCustomId("inGroupTextInputWeek")
                    .setLabel("Week")
                    .setPlaceholder("Week (Even or Odd)")
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short);

                const inGroupTextInputDay = new TextInputBuilder()
                    .setCustomId("inGroupTextInputDay")
                    .setLabel("Day")
                    .setPlaceholder("Day (Monday, Tuesday, Wednesday, Thursday, Friday)")
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short);

                const inGroupTextInputTime = new TextInputBuilder()
                    .setCustomId("inGroupTextInputTime")
                    .setLabel("Time")
                    .setPlaceholder("Time (M1, M2, M3, M4, M5, S1, S2, S3, S4)")
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short);

                inGroupModal1.addComponents(
                    new ActionRowBuilder()
                        .addComponents(inGroupTextInputWeek),
                    new ActionRowBuilder()
                        .addComponents(inGroupTextInputDay),
                    new ActionRowBuilder()
                        .addComponents(inGroupTextInputTime)
                );

                await interaction.showModal(inGroupModal1);
                break;

            case "inoption":

                const inOptionModal = new ModalBuilder()
                    .setTitle("In option")
                    .setCustomId("init-inOptionModal1");

                const inOptionTextInputWeek = new TextInputBuilder()
                    .setCustomId("inOptionTextInputWeek")
                    .setLabel("Week")
                    .setPlaceholder("Week (Even or Odd)")
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short);

                const inOptionTextInputDay = new TextInputBuilder()
                    .setCustomId("inOptionTextInputDay")
                    .setLabel("Day")
                    .setPlaceholder("Day (Monday, Tuesday, Wednesday, Thursday, Friday)")
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short);

                const inOptionTextInputTime = new TextInputBuilder()
                    .setCustomId("inOptionTextInputTime")
                    .setLabel("Time")
                    .setPlaceholder("Time (M1, M2, M3, M4, M5, S1, S2, S3, S4)")
                    .setRequired(true)
                    .setStyle(TextInputStyle.Short);

                inOptionModal.addComponents(
                    new ActionRowBuilder()
                        .addComponents(inOptionTextInputWeek),
                    new ActionRowBuilder()
                        .addComponents(inOptionTextInputDay),
                    new ActionRowBuilder()
                        .addComponents(inOptionTextInputTime)
                );

                await interaction.showModal(inOptionModal);
                break;

            default:
                break;

        }

    }
}

        
