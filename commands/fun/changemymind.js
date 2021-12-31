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
        let msg = args.join(" ");
        if(!msg) msg = "Please provide text!"
        let image = await canvacord.Canvas.changemymind(msg);
        let attachment = await new Discord.MessageAttachment(image, "changemymind.png");
        let fastembed2 = new Discord.MessageEmbed()
        .setColor("RANDOM").setFooter(client.user.username)
        .setImage("attachment://changemymind.png")
        .attachFiles(attachment).setFooter(client.user.username)
        await message.channel.send(fastembed2);
        await tempmsg.delete();//ohno
    }
}