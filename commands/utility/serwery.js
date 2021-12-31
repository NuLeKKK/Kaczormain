const Discord = require('discord.js')

module.exports = {
    name: "servers",
    description: "serwery",

    async run (bot, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('3 serwery na których jestem')
        .setAuthor('Command List', message.author.displayAvatarURL())

       .addFields({
        name: 'Anime Serwer',
        value: 'https://discord.gg/WdchNEt6GD',        
    },
    {
    name:  '🍷🖤⛓',
    value: 'https://discord.gg/zKS3WGcSpd',     
    },
    {
        name: 'GokuBot',
        value: 'https://discord.gg/yPPNhynsSv',
    },
    {
        name: 'Chill with Friends',
        value: 'https://discord.gg/R9qgbZxtZ2',
    },)
        

        message.channel.send(help)
    }
}