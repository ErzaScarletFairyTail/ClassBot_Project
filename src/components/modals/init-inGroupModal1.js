const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-inGroupModal1'
    },
    
    async execute(interaction, client) {

        const {ingroupwork} = client;

        const week = interaction.fields.getTextInputValue("inGroupTextInputWeek");
        const day = interaction.fields.getTextInputValue("inGroupTextInputDay");
        const time = interaction.fields.getTextInputValue("inGroupTextInputTime");

        ingroupwork.push(week, day, time);
        const validateButton = new ButtonBuilder()
            .setCustomId('init-validateInGroupModal1')
            .setLabel('Validate')
            .setStyle(ButtonStyle.Success);

        const cancelButton = new ButtonBuilder()
            .setCustomId('init-cancelInGroupModal1')
            .setLabel('Cancel')
            .setStyle(ButtonStyle.Danger);

        const row = new ActionRowBuilder()
            .addComponents(validateButton, cancelButton);

        await interaction.update({
            content: `Please confirm that you want to config: ${week} ${day} ${time}`,
            components: [row],
            ephemeral: true
        });

        // ingroupwork.push(week, day, time);

        // const inGroupModal2 = new ModalBuilder()
        //     .setTitle("In group")
        //     .setCustomId("init-inGroupModal2");

        // const inGroupTextInputSubjectGroupA = new TextInputBuilder()
        //     .setCustomId("inGroupTextInputSubjectGroupA")
        //     .setLabel("Subject Group A")
        //     .setPlaceholder("Subject Group A")
        //     .setStyle(TextInputStyle.Short);

        // const inGroupTextInputClassroomGroupA = new TextInputBuilder()
        //     .setCustomId("inGroupTextInputClassroomGroupA")
        //     .setLabel("Classroom Group A")
        //     .setPlaceholder("Classroom Group A")
        //     .setStyle(TextInputStyle.Short);

        // const inGroupTextInputSubjectGroupB = new TextInputBuilder()
        //     .setCustomId("inGroupTextInputSubjectGroupB")
        //     .setLabel("Subject Group B")
        //     .setPlaceholder("Subject Group B")
        //     .setStyle(TextInputStyle.Short);

        // const inGroupTextInputClassroomGroupB = new TextInputBuilder()
        //     .setCustomId("inGroupTextInputClassroomGroupB")
        //     .setLabel("Classroom Group B")
        //     .setPlaceholder("Classroom Group B")
        //     .setStyle(TextInputStyle.Short);

        // inGroupModal2.addComponents(
        //     new ActionRowBuilder()
        //         .addComponents(inGroupTextInputSubjectGroupA),
        //     new ActionRowBuilder()
        //         .addComponents(inGroupTextInputClassroomGroupA),
        //     new ActionRowBuilder()
        //         .addComponents(inGroupTextInputSubjectGroupB),
        //     new ActionRowBuilder()
        //         .addComponents(inGroupTextInputClassroomGroupB)
        // );

        // await interaction.showModal(inGroupModal2);

    }
}