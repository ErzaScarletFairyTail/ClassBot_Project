module.exports = {
    data: {
        "name": "testmenu"
    },
    async execute(interaction, client) {
        
        switch (interaction.values[0]) {
            case "option1":
                await interaction.reply({
                    content: "You chose option 1"
                });
                break;
            case "option2":
                await interaction.reply({
                    content: "You chose option 2"
                });
                break;
            default:
                break;
        }
    }
}
