const Discord = require('discord.js')
const {ownerID} = require('../../owner.json')

module.exports = {
    name: 'helpowner',
    description: 'Help owner',

    run: async (bot, message, args) => {
        let premium = ownerID.includes(message.author.id)
        if(!premium) return message.channel.send("You not have owner **Gokubot**")

        const discord = new Discord.MessageEmbed()
        .setTitle('Owner Commandss')
        .setDescription('Owner Commands \n \n Eval - this is command send message to programistick message \n getinv - idk whats command \n Serverlist - serverlist bot \n stat - status ')
        message.channel.send(discord)
    } 
}