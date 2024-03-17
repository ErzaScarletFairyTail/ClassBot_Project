const fs = require('fs');

module.exports = {
    data: {
        name: 'init-cancelInOptionModal1'
    },

    async execute(interaction, client) {
        const { inoptionwork } = client;

        // clear the array
        inoptionwork.length = 0;

        await interaction.update({
            content: 'Canceled',
            components: []
        });
    }
}