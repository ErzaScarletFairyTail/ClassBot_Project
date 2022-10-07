const { ActivityType } = require('discord.js');

module.exports = (client) => {
    client.pickPresence = async () => {
        const options = [
            {
                type: ActivityType.Watching,
                text: "Check your Timetable",
                status: "online"
            },
            {
                type: ActivityType.Playing,
                text: "Forza Horizon 5",
                status: "dnd"
            },
            {
                type: ActivityType.Playing,
                text: "Minecraft",
                status: "dnd"
            },
            {
                type: ActivityType.Listening,
                text: "Youtube Music",
                status: "idle"
            },
            {
                type: ActivityType.Listening,
                text: "Spotfiy",
                status: "idle"
            }
        ];

        const option = Math.floor(Math.random() * options.length);

        client.user.setPresence({
            activities: [{
                name: options[option].text,
                type: options[option].type,
            }],
            status: options[option].status,
        })
    }
}