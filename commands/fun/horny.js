const Discord = require('discord.js')

module.exports = {
    name: "horny",
    description: "a howgay command",

    async run (bot, message, args) {
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const hornyembed = new Discord.MessageEmbed()
        .setTitle(`Horny Machine Generator`)
        .setDescription(`${member.username} is ` + rng + "% Horny🤤")
        .setColor("GREEN")

        message.channel.send(hornyembed);
    }
}