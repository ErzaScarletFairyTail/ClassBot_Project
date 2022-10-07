const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        setInterval(() => {
            client.pickPresence();
        }, 30000);
        console.log(`Logged in as ${client.user.tag}!`);
    }
};