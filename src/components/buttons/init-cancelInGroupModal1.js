const fs = require('fs');

module.exports = {
    data: {
        name: 'init-cancelInGroupModal1'
    },

    async execute(interaction, client) {
        const { ingroupwork } = client;

        // clear the array
        ingroupwork.length = 0;

        await interaction.update({
            content: 'Canceled',
            components: []
        });
    }
}