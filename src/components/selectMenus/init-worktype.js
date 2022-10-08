const {SelectMenuBuilder,  SelectMenuOptionBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: {
        name: 'init-worktype'
    },

    async execute(interaction, client) {

        const { setTimeTable } = client;

        // Create a new ModalBuilder name 'inClassModal'
        const inClassModal = new ModalBuilder()
            .setCustomId('init-inClassModal')
            .setTitle('Config the in class work');

        // Create a new TextInputBuilder name 'inClassTextInputWeek'
        const inClassTextInputWeek = new TextInputBuilder()
            .setCustomId('inClassTextInputWeek')
            .setPlaceholder('Which week? (Even or Odd)')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        // Create a new TextInputBuilder name 'inClassTextInputDay'
        const inClassTextInputDay = new TextInputBuilder()
            .setCustomId('inClassTextInputDay')
            .setPlaceholder('Which day? (Mon, Tue, Wed, Thu, Fri)')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        // Create a new TextInputBuilder name 'inClassTextInputTime'
        const inClassTextInputTime = new TextInputBuilder()
            .setCustomId('inClassTextInputTime')
            .setPlaceholder('Which time? (M1, M2, M3, M4, M5, S1, S2, S3, S4)')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);
        
        // Create a new TextInputBuilder name 'inClassTextInputSubject'
        const inClassTextInputSubject = new TextInputBuilder()
            .setCustomId('inClassTextInputSubject')
            .setLabel('Write the subject of the work')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);
        
        // Create a new TextInputBuilder name 'inClassTextInputClassroom'
        const inClassTextInputClassroom = new TextInputBuilder()
            .setCustomId('inClassTextInputClassroom')
            .setLabel('Write the classroom of the work')
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        // Add the ActionRowBuilder to the ModalBuilder
        inClassModal.addComponents(new ActionRowBuilder().addComponents(inClassTextInputWeek), new ActionRowBuilder().addComponents(inClassTextInputDay), new ActionRowBuilder().addComponents(inClassTextInputTime) , new ActionRowBuilder().addComponents(inClassTextInputSubject), new ActionRowBuilder().addComponents(inClassTextInputClassroom));


        // Create a new ModalBuilder name 'inGroupModal'
        const inGroupModal = new ModalBuilder()
            .setCustomId('init-inGroupModal')
            .setTitle('Config the in group work');

        // Create a new TextInputBuilder name 'inGroupTextInputGroupASubject'
        const inGroupTextInputGroupASubject = new TextInputBuilder()
            .setCustomId('inGroupTextInputGroupASubject')
            .setLabel('Write the subject of the group A work')
            .setRequired(true);

        // Create a new TextInputBuilder name 'inGroupTextInputGroupBSubject'
        const inGroupTextInputGroupBSubject = new TextInputBuilder()
            .setCustomId('inGroupTextInputGroupBSubject')
            .setLabel('Write the subject of the group B work')
            .setRequired(true);

        // Create a new TextInputBuilder name 'inGroupTextInputGroupAClassroom'
        const inGroupTextInputGroupAClassroom = new TextInputBuilder()
            .setCustomId('inGroupTextInputGroupAClassroom')
            .setLabel('Write the classroom of the group A work')
            .setRequired(true);

        // Create a new TextInputBuilder name 'inGroupTextInputGroupBClassroom'
        const inGroupTextInputGroupBClassroom = new TextInputBuilder()
            .setCustomId('inGroupTextInputGroupBClassroom')
            .setLabel('Write the classroom of the group B work')
            .setRequired(true);

        // Add the ActionRowBuilder to the ModalBuilder
        inGroupModal.addComponents(new ActionRowBuilder().addComponents(inGroupTextInputGroupASubject), new ActionRowBuilder().addComponents(inGroupTextInputGroupAClassroom), new ActionRowBuilder().addComponents(inGroupTextInputGroupBSubject), new ActionRowBuilder().addComponents(inGroupTextInputGroupBClassroom));

        // Create a new ModalBuilder name 'inOptionTechModal'
        const inOptionTechModal = new ModalBuilder()
            .setCustomId('init-inOptionTechModal')
            .setTitle('Config the in option work');
        
        // Create a new TextInputBuilder name 'inOptionTechTextInputSubjectSIN'
        const inOptionTechTextInputSubjectSIN = new TextInputBuilder()
            .setCustomId('inOptionTechTextInputSubjectSIN')
            .setLabel('Write the subject of the SIN work');
        
        // Create a new TextInputBuilder name 'inOptionTechTextInputClassroomSIN'
        const inOptionTechTextInputClassroomSIN = new TextInputBuilder()
            .setCustomId('inOptionTechTextInputClassroomSIN')
            .setLabel('Write the classroom of the SIN work');

        // Create a new TextInputBuilder name 'inOptionTechTextInputSubjectEE'
        const inOptionTechTextInputSubjectEE = new TextInputBuilder()
            .setCustomId('inOptionTechTextInputSubjectEE')
            .setLabel('Write the subject of the EE work');

        // Create a new TextInputBuilder name 'inOptionTechTextInputClassroomEE'
        const inOptionTechTextInputClassroomEE = new TextInputBuilder()
            .setCustomId('inOptionTechTextInputClassroomEE')
            .setLabel('Write the classroom of the EE work');

        // Create a new TextInputBuilder name 'inOptionTechTextInputSubjectITEC'
        const inOptionTechTextInputSubjectITEC = new TextInputBuilder()
            .setCustomId('inOptionTechTextInputSubjectITEC')
            .setLabel('Write the subject of the ITEC work');

        // Create a new TextInputBuilder name 'inOptionTechTextInputClassroomITEC'
        const inOptionTechTextInputClassroomITEC = new TextInputBuilder()
            .setCustomId('inOptionTechTextInputClassroomITEC')
            .setLabel('Write the classroom of the ITEC work');

        // Add the ActionRowBuilder to the ModalBuilder
        inOptionTechModal.addComponents(new ActionRowBuilder().addComponents(inOptionTechTextInputSubjectSIN), new ActionRowBuilder().addComponents(inOptionTechTextInputClassroomSIN), new ActionRowBuilder().addComponents(inOptionTechTextInputSubjectEE), new ActionRowBuilder().addComponents(inOptionTechTextInputClassroomEE), new ActionRowBuilder().addComponents(inOptionTechTextInputSubjectITEC), new ActionRowBuilder().addComponents(inOptionTechTextInputClassroomITEC));


        // Switch case for the work type

        switch (interaction.values[0]) {
            case 'inclass':
                await interaction.showModal(inClassModal);
                break;
            case 'ingroup':
                await interaction.showModal(inGroupModal);
                break;
            case 'inoption':

                // get the time table of the server
                const timeTable = fs.readFileSync(`./src/data/${interaction.guild.id}/timetable.json`, 'utf8');

                // if the section is technology
                if (timeTable.section === 'technology') {
                    await interaction.showModal(inOptionTechModal);
                
                // if the section is general
                } else if (timeTable.section === 'general') {
                    interaction.update({
                        content: 'This option is not available for your section',
                        components: []
                    });
                }
                break;
            
            default:
                break;
        }
    }
}

        
