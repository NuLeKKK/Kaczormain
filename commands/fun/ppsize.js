const discord = require("discord.js");

module.exports = { 
    name: "ppsize",
    description: "ppsize",

    async run (client, message, args) {
   let user = message.mentions.users.first() || message.author;
   let random = Math.floor(Math.random() * 10) + 1; // Get a random number
   let size = "";

   for(let i = 0; i < random; i++){
      size += "=";
   }
   
   let pp = "8" + size + "D";
   let description = " ppsize: " + pp;

   // Create an embed message
   const embed = new discord.MessageEmbed()
   .setAuthor(user.tag, user.displayAvatarURL())
   .setColor("RANDOM")
   .setDescription(message.author.toString() + description)
   .setTimestamp()
   return message.channel.send(embed);
}
}