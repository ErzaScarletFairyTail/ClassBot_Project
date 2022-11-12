const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder() // Create a new SlashCommandBuilder
        .setName('travail') // Set the name of the command
        .setDescription('Send the work to a specifique channel!') // Set the description of the command
        .addSubcommand(subcommand => // Add a subcommand
            subcommand // Create a new subcommand
                .setName('dm') // Set the name of the subcommand
                .setDescription('Send the work to a specifique channel!') // Set the description of the subcommand
                .addStringOption(option => // Add a string option
                    option // Create a new string option
                        .setName('work') // Set the name of the option
                        .setDescription('the work') // Set the description of the option
                        .setRequired(true) // Set the option as required
                )
                .addChannelOption(option => // Add a channel option
                    option // Create a new channel option
                        .setName('channel') // Set the name of the option
                        .setDescription('the channel to send the work') // Set the description of the option    
                        .setRequired(true) // Set the option as required
                )
        )
        .addSubcommand(subcommand => // Add a subcommand
            subcommand // Create a new subcommand
                .setName('ds') // Set the name of the subcommand
                .setDescription('Send the work to a specifique channel!') // Set the description of the subcommand
                .addStringOption(option => // Add a string option
                    option // Create a new string option
                        .setName('work') // Set the name of the option
                        .setDescription('the work') // Set the description of the option
                        .setRequired(true) // Set the option as required
                )
                .addChannelOption(option => // Add a channel option
                    option // Create a new channel option
                        .setName('channel') // Set the name of the option
                        .setDescription('the channel to send the work') // Set the description of the option
                        .setRequired(true) // Set the option as required
                )
        )
        .addSubcommand(subcommand => // Add a subcommand
            subcommand // Create a new subcommand
                .setName('basic') // Set the name of the subcommand
                .setDescription('Send the work to a specifique channel!') // Set the description of the subcommand
                .addStringOption(option => // Add a string option
                    option // Create a new string option
                        .setName('work') // Set the name of the option
                        .setDescription('the work') // Set the description of the option
                        .setRequired(true) // Set the option as required
                )
                .addChannelOption(option => // Add a channel option
                    option // Create a new channel option
                        .setName('channel') // Set the name of the option
                        .setDescription('the channel to send the work') // Set the description of the option
                        .setRequired(true) // Set the option as required
                )
        ),
    async execute(interaction, client) { // Execute the command
        const subcommand = interaction.options.getSubcommand(); // Get the subcommand
        const work = interaction.options.getString('work'); // Get the work
        const channel = interaction.options.getChannel('channel'); // Get the channel

        switch (subcommand) { // Switch the subcommand
            case 'dm': // If the subcommand is dm
                await channel.send({ // Send a message in the channel
                    content: `@everyone\n DM:\n ${work}\nBonne revision!`// Set the content of the message
                });
                await interaction.reply({ // Reply to the interaction
                    content: `Work send to ${channel}!`, // Set the content of the reply
                    ephemeral: true // Set the reply as ephemeral
                });
                break; // Break the switch
            case 'ds': // If the subcommand is ds
                await channel.send({ // Send a message in the channel
                    content: `@everyone\n DS:\n ${work}\nBonne revision!` // Set the content of the message
                });
                await interaction.reply({ // Reply to the interaction
                    content: `Work send to ${channel}!`, // Set the content of the reply
                    ephemeral: true // Set the reply as ephemeral
                });
                break; // Break the switch
            case 'basic': // If the subcommand is basic
                await channel.send({ // Send a message in the channel
                    content: `@everyone\n Devoir:\n${work}` // Set the content of the message
                });
                await interaction.reply({ // Reply to the interaction
                    content: `Work send to ${channel}!`, // Set the content of the reply
                    ephemeral: true // Set the reply as ephemeral
                });
                break
            default: // If the subcommand is not dm, ds or basic
                await interaction.reply({ // Reply to the interaction
                    content: 'An error occured!', // Set the content of the reply
                    ephemeral: true // Set the reply as ephemeral
                });
                break; // Break the switch
        }
    }
};