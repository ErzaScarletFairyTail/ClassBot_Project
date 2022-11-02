const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('clear') // Set the name of the command
        .setDescription('Clear a specific amount of message.') // Set the description of the command
        .addIntegerOption(option => option
            .setName('amount')
            .setDescription('Amount of message to clear.')
            .setRequired(true)
        ),
    async execute(interaction, client) { // Execute the command
        const {channel, options} = interaction;

        const amount = options.getInteger('amount');
        const messages = await channel.messages.fetch({
            limit: amount +1,
        });

        const res = new EmbedBuilder()
            .setTitle('Clear')
            .setColor(0x5fb041)
            .setTimestamp();

        await channel.bulkDelete(amount, true).then(messages => {
            res.setDescription(`Succesfully delete ${messages.size} messages from the channel.`);
            interaction.reply({embeds:[res]});
        });

    }
};