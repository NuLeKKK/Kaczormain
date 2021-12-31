const Discord = require('discord.js')

module.exports = {
    name: 'nowość',
    description: 'nowe komendy co tydzień zmieniane',

    async run(client, message, args) {

        const embed = new Discord.MessageEmbed()
        
        .setTitle('Nowe Komendy W bocie')
        .setDescription('**[+] - Dodane \n [/] - naprawione/zmienione \n [-] - odjęte**')
        .addField('[+] Dodane', 'Wiadomość Prywatna Do z Kickowanej Osoby')
        .setFooter('Zmiany tego są co tydzień w poniedziałki Nie wiem w których godzinach')

        message.channel.send(embed)
    }
}