const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Nie możesz tego użyć!')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('Nie mam odpowiednich uprawnień.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Określ użytkownika');

        if(!member) return message.channel.send('Nie można znaleźć tego użytkownika. Przepraszam za to :/');
        if(!member.bannable) return message.channel.send('Ten użytkownik nie może zostać zbanowany. Dzieje się tak dlatego, że są modami / adminami lub ich najwyższa rola jest wyższa niż moja');

        if(member.id === message.author.id) return message.channel.send('Bruh, you can\'t ban yourself!');

        let banReason = args.slice(1).join(" ");

        if(!banReason) banReason = 'Nieokreślony';

        member.ban({ reason: banReason })
        .catch(err => {
            if(err) return message.channel.send('Coś poszło nie tak')
        })

        const banembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Członek Zbanowany')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Użytkownik Zbanowany', member)
        .addField('Kicked by', message.author)
        .addField('Powód', banReason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


    }
}