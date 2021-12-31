const Discord = require("discord.js");

module.exports = {
 name: "clear",
 aliases: ["clear"],
 description: "Removes up to 100 messages",
 category: "Moderation",
 usage: "prune <amount>",
 run: async (client, message, args) => {
  try {
   if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) {
    let error = new Discord.MessageEmbed()
     .setColor("FF5757")
     .setDescription("❌ | Nie masz uprawnień do usuwania wiadomości!")
     .setFooter("Ta wiadomość zostanie usunięta po 3 sekundach", message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
    message.channel.send(error).then(m => m.delete({timeout: 3000}))
    return message.delete({timeout: 3000})
   }
   if (isNaN(args[0])) {
    let error = new Discord.MessageEmbed()
     .setColor("FF5757")
     .setDescription("❌ | Podaj prawidłowy numer!")
     .setFooter("Ta wiadomość zostanie usunięta po 3 sekundach", message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
    message.channel.send(error).then(m => m.delete({timeout: 3000}))
    return message.delete({timeout: 3000})
   }
   if (args[0] > 100) {
    let error = new Discord.MessageEmbed()
     .setColor("FF5757")
     .setDescription("❌ | Wpisz liczbę mniejszą niż 100!")
     .setFooter("Ta wiadomość zostanie usunięta po 3 sekundach", message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
    message.channel.send(error).then(m => m.delete({timeout: 3000}))
    return message.delete({timeout: 3000})
   }
   if (args[0] < 2) {
    let error = new Discord.MessageEmbed()
     .setColor("FF5757")
     .setDescription("❌ | Wpisz liczbę większą niż 1!")
     .setFooter("Ta wiadomość zostanie usunięta po 3 sekundach", message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
    message.channel.send(error).then(m => m.delete({timeout: 3000}))
    return message.delete({timeout: 3000})
   }
   await message.delete()
   await message.channel.bulkDelete(args[0])
   .then(messages => {
    let error = new Discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle(":white_check_mark: Success!", message.guild.iconURL({ dynamic: true, format: 'png'}))
     .setDescription(":wastebasket: Deleted " + `${messages.size}/${args[0]}` + " messages.")
     .setFooter("This message will be deleted after 3 seconds", message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
    return message.channel.send(error).then(m => m.delete({timeout: 3000}))
   })
  } catch(err) {
   message.channel.send({embed: {
    color: 16734039,
    description: "Something went wrong... :cry:"
  }})
  console.log(err)
  }
 }
}