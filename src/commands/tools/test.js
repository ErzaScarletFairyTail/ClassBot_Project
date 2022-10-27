const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('test') // Set the name of the command
        .setDescription('Test a features')
        .addStringOption(option => option
            .setName('classe')
            .setDescription('Choisir la classe')
            .setAutocomplete(true)
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName('section')
            .setDescription('Choisir la section')
            .setAutocomplete(true)
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName('option1')
            .setDescription('Choisir l\'option 1')
            .setAutocomplete(true)
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName('option2')
            .setDescription('Choisir l\'option 2')
            .setAutocomplete(true)
            .setRequired(true)
        ),

    async autocomplete(interaction, client) {
        const focusedValue = interaction.options.getFocused(true);
        let choices;
        switch (focusedValue.name) {
            case 'classe':
                choices = ['seconde', 'première', 'terminale'];
                break;
            case 'section':
                choices = ['General and Technology section', 'General section', 'Technology section'];
                break;
            case 'option1':
                choices = ['SIN', 'EE', 'ITEC'];
                break;
            case 'option2':
                choices = ['SIN', 'EE', 'ITEC'];
                break;
            default:
                break;
        }
        const filtered = choices.filter(choice => choice.startsWith(focusedValue.value));
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
        
    },
    async execute(interaction, client) { // Execute the command
        const classe = interaction.options.getString('classe');
        const section = interaction.options.getString('section');
        const option1 = interaction.options.getString('option1');
        const option2 = interaction.options.getString('option2');

        // Create the embed
        const embed = {
            color: 0x0099ff,
            title: 'Confirmation of your choices',
            fields: [
                {
                    name: 'Classe',
                    value: classe,
                    inline: true,
                },
                {
                    name: 'Section',
                    value: section,
                    inline: true,
                },
                {
                    name: 'Option 1',
                    value: option1,
                    inline: true,
                },
                {
                    name: 'Option 2',
                    value: option2,
                    inline: true,
                },
            ],
            timestamp: new Date(),
            footer: {
                text: 'Made by @Lilith#0001',
                icon_url: 'https://cdn.discordapp.com/avatars/709000000000000000/00000000000000000000000000000000.png?size=1024',
            }
        };
        
        await interaction.reply({ embeds: [embed] });
    }
};