const fs = require('fs'); 

module.exports = {
    data: {
        name: 'testcreatefile',
    },
    async execute(interaction, client) {
        const idServer = interaction.guild.id;

        const data = {
            "nameOfTheClass": interaction.fields.getTextInputValue("TINameClass")
        }

        const json = JSON.stringify(data);

        if (!fs.existsSync(`./src/data/${idServer}`)) {
            fs.writeFileSync(`./src/data/${idServer}.json`, json);

            await interaction.reply({
                content: `The file has been created!`
            });
        } else {
            await interaction.reply({
                content: `The file already exists!`
            });
        }
    }
};