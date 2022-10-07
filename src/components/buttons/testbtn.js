module.exports = {
    data: {
        name: "testbtn"
    },
    async execute(interaction, client) {
        await interaction.reply("This is a test button!");
    }
}