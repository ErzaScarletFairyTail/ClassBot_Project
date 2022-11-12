const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName("alerte") // Set the name of the command
        .setDescription("alete about somethings")// Set the description of the command
        .addSubcommand(subcommand => // Add a subcommand
            subcommand // Create a new subcommand
                .setName("teacher-missing") // Set the name of the subcommand
                .setDescription("alerte about teacher missing") // Set the description of the subcommand
                .addStringOption(option => // Add a string option
                    option // Create a new string option
                        .setName("teacher") // Set the name of the option
                        .setDescription("the teacher missing") // Set the description of the option
                        .setRequired(true) // Set the option as required
                )
                .addChannelOption(option => // Add a channel option
                    option // Create a new channel option
                        .setName("channel") // Set the name of the option
                        .setDescription("the channel to send the alerte") // Set the description of the option
                        .setRequired(true) // Set the option as required
                )
        )
        .addSubcommand(subcommand => // Add a subcommand
            subcommand // Create a new subcommand
                .setName("hour-change") // Set the name of the subcommand
                .setDescription("alerte about hour change") // Set the description of the subcommand
                .addStringOption(option => // Add a string option
                    option // Create a new string option
                        .setName("hour") // Set the name of the option
                        .setDescription("the hour change") // Set the description of the option
                        .setRequired(true) // Set the option as required
                )
                .addChannelOption(option => // Add a channel option
                    option // Create a new channel option
                        .setName("channel") // Set the name of the option
                        .setDescription("the channel to send the alerte") // Set the description of the option
                        .setRequired(true) // Set the option as required
                )
        )
        .addSubcommand(subcommand => // Add a subcommand
            subcommand // Create a new subcommand
                .setName("info") // Set the name of the subcommand
                .setDescription("alerte about info") // Set the description of the subcommand
                .addStringOption(option => // Add a string option
                    option // Create a new string option
                        .setName("info") // Set the name of the option
                        .setDescription("the info") // Set the description of the option
                        .setRequired(true) // Set the option as required
                )
                .addChannelOption(option => // Add a channel option
                    option // Create a new channel option
                        .setName("channel") // Set the name of the option
                        .setDescription("the channel to send the alerte") // Set the description of the option
                        .setRequired(true) // Set the option as required
                )
        ),
                        
    async execute(interaction, client) {
        const subcommand = interaction.options.getSubcommand(); // Get the subcommand
        const channel = interaction.options.getChannel("channel"); // Get the channel option
        const teacher = interaction.options.getString("teacher"); // Get the teacher option
        const hour = interaction.options.getString("hour"); // Get the hour option
        const info = interaction.options.getString("info"); // Get the info option

        if (subcommand === "teacher-missing") { // If the subcommand is teacher-missing
            channel.send(`@everyone The teacher ${teacher} is missing`); // Send a message in the channel
            await interaction.reply({ content: "Alerte send", ephemeral: true }); // Reply to the interaction
        } else if (subcommand === "hour-change") { // If the subcommand is hour-change
            channel.send(`@everyone The hour change to ${hour}`); // Send a message in the channel
            await interaction.reply({ content: "Alerte send", ephemeral: true }); // Reply to the interaction
        } else if (subcommand === "info") { // If the subcommand is info
            channel.send(`@everyone The info is ${info}`); // Send a message in the channel
            await interaction.reply({ content: "Alerte send", ephemeral: true }); // Reply to the interaction
        }
    },
};
