const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('ping') // Set the name of the command
        .setDescription('Return my ping!'), // Set the description of the command
    async execute(interaction, client) { // Execute the command
        const message = await interaction.deferReply({
            fetchReply: true 
        }); // Defer the reply and fetch the reply

        const newMessage = `API Latency: ${Math.round(client.ws.ping)}ms\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`; // Create a new message

        await interaction.editReply({
            content: newMessage // Edit the reply
        }); 
    }
};