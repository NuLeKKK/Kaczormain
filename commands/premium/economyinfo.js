const Discord = require('discord.js');
const {Premiumiduser} = require('../../premiumid.json')

module.exports = {
        name: "verifyinfo",
        category: "nsfw",
        description: "Shows random kuni image",

    run: async (bot, message, args) => {
        let premium = Premiumiduser.includes(message.author.id)
        if(!premium) return message.channel.send("You not have premium **Gokubot**")

        const embedded = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Potwierdzone Informacje")
        .setDescription("07.08.21 Będzie Ekonomia \n 20:20 Testy kolejnego helpa")

        message.author.send(embedded)
    }
}