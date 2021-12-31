const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mc",
  description: "Gives you an achievment",
  aliases: ["ach"],
  category: "Image",
  run: async (client, message, args) => {
    const text = args.join("+");
    const e = new MessageEmbed()
      .setTitle("MineCraft achievement!")
      .setImage(
        `https://minecraftskinstealer.com/achievement/2/Achievement%20Get!/${text}`
      );
    message.channel.send(e);
  },
};