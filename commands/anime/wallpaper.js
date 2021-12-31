//wallpaper
const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: 'wallpaper',
    category: 'wallpaper',

    run: async (client, message, args) => {
const image = await nsfw.wallpaper();
const embed = new Discord.MessageEmbed()
    .setTitle(`🎨 Tapeta 🎨`)
    .setColor("RANDOM")
    .setImage(image);
message.channel.send(embed);
}
    
}