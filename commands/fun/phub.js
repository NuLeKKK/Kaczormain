const Canvas = require('canvas');
const { MessageEmbed } = require('discord.js');
const Discord = require(`discord.js`);
const canvacord = require("canvacord");
const path = require("path");
module.exports = {

    name: path.parse(__filename).name,
    category: "👻 Fun Commands",
    useage: `${path.parse(__filename).name} [@User]`,
  description: "*Image cmd in the style:* " + path.parse(__filename).name ,
    run: async (client, message, args) => {
        let tempmsg = await message.channel.send(new MessageEmbed().setColor("RANDOM").setFooter(client.user.username).setAuthor("Loading...", "https://cdn.discordapp.com/emojis/769935094285860894.gif"))
        let user = message.mentions.users.first() || message.author;
        let messg = args.join(" ")
        if(user!=message.author) messg =  args.slice(1).join(" ")
        if(!messg) messg = "NO MESSAGE SET!"
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.phub({
            username: user.username,
            message: messg,
            image: avatar
        });
        let attachment = await new Discord.MessageAttachment(image, "phub.png");
        let fastembed2 = new Discord.MessageEmbed()
        .setColor("RANDOM").setFooter(client.user.username)
        .setImage("attachment://phub.png")
        .attachFiles(attachment).setFooter(client.user.username)
        await message.channel.send(fastembed2);
        await tempmsg.delete();//phub
    }
}