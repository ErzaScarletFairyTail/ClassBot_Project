module.exports = {
    data: {
        name: 'testmodal'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `You write: ${interaction.fields.getTextInputValue("testTextInput")}`
        });
    }
};