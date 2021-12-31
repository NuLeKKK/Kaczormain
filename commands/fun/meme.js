const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    description: "meme command, sends a meme from certain place",

    async run (bot, message, args) {
        const subReddits = ["meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random)

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Twój **meme** został przyznany. Całą drogę od r/${random}`)
        .setURL(`https://www.reddit.com/r/MemyPolskaa/${random}`)

        message.channel.send(embed)
    }
}