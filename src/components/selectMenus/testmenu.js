module.exports = {
    data: {
        name: 'testmenu2',
    },
    async execute(interaction, client) {
        switch (interaction.values[0]) {
            case 'option1':
                await interaction.reply({
                    content: 'You selected option 1 from testmenu2',
                    ephemeral: true
                });
                break;
            case 'option2':
                await interaction.reply({
                    content: 'You selected option 2 from testmenu2',
                    ephemeral: true
                });
                break;
        }
    }
}