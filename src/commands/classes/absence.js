const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName("absences") // Set the name of the command
        .setDescription("add teacher to missing list!") // Set the description of the command
        .addStringOption((option) =>
            option
                .setName("teachers")
                .setDescription("The teacher you are missing")
                .setRequired(true)
        ) // Add a string option
        .addChannelOption((option) =>
            option
                .setName("channel")
                .setDescription("The channel you want to send the message to")
                .setRequired(true)
        ), // Add a channel option
    async execute(interaction, client) {
        // Execute the command
        const teacher = interaction.options.getString("teachers"); // Get the teacher from the options
        const channel = interaction.options.getChannel("channel"); // Get the channel from the options

        // Send the message
        await channel.send(`@everyone ${teacher} is missing!`);

        // Send a reply
        await interaction.reply({
            content: `I have sent a message to ${channel}!`,
            ephemeral: true
        });

    },
};
