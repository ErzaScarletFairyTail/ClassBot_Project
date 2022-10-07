const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder() // Create a new SlashCommandBuilder
        .setName('getAvatar') // Set the name of the command
        .setType(ApplicationCommandType.User), // Set the type of the command
    async execute(interaction, client) { // Execute the command

        await interaction.reply({ // Reply to the interaction
            content: `${interaction.targetUser.displayAvatarURL()}` // Send the user's avatar URL
        });
        
    }
};