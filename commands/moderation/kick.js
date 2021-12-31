const Discord = require('discord.js');

const db = require('quick.db')

module.exports = {
    name: "kick",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Nie możesz tego użyć!')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('Nie mam odpowiednich uprawnień.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Określ użytkownika');

        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
        if(!member.kickable) return message.channel.send('Tego użytkownika nie można wyrzucić. Dzieje się tak dlatego, że są modami / adminami lub ich najwyższa rola jest wyższa niż moja');

        if(member.id === message.author.id) return message.channel.send('Bruh, nie możesz się wyrzucić!');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Nieokreślony';

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('Coś poszło nie tak')
        })

        const kickembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Członek wyrzucony')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Użytkownik wyrzucony', member)
        .addField('Kicked by', message.author)
        .addField('Powód', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(kickembed);
        const dmmessage = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Zostałeś wyrzucony z serwera ${message.guild.name}`)
        .addField('Wyrzucony przez', message.author)
        .addField('z Powodu', reason)

        member.send(dmmessage);
    }
}