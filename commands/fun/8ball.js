const Discord = require('discord.js')

module.exports = {
    name: "8b",
    description: "8ball command",

    async run (bot, message, args) {
        if(!args[0]) return message.reply('Proszę zadać pełne pytanie!')
        let replies = ["tak.", "Perspektywy wydają się dobre.", "yus", "oczywiście.", "Tak - zdecydowanie.", "Nie.", "Lepiej ci teraz nie mówić.", "Perspektywy nie są tak dobre...", "nah", "nigdy", "Nie mogę teraz przewidzieć.", "Nie wiem.", "Nie wiem *jeszcze*...", "nie ma mowy.", "Chyba tak.", "tylko na dziś!", "nie dziś c:", "Niestety tak..", "Niestety nie..", "może!", "Zapytaj ponownie..później.."];
        
        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice().join(" ");

        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor("#1C1C1C")
        .addField("Question", question)
        .addField("Answer", replies[result])

        message.channel.send(ballembed)
    }
}