const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "slowmode",
    description: "Set the slowmode of a channel.",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You don't have enough perms to use this command!")
        }
        let duration = args[0]
        if(isNaN(duration)) return message.reply("Please give the time in seconds.")
        let reason = args.slice(1).join(" ")
        if(!reason) return message.reply("Please specify a reason!")
        
        message.channel.setRateLimitPerUser(duration, reason)
        const newEmbed = new MessageEmbed()
        .setColor('#00ff00')
        .addField('Powód', reason)
        .setTitle('Zmiana slowmode')
        .setFooter(message.author.tag, message.author.avatarURL())
        message.channel.send(newEmbed)
    }
}