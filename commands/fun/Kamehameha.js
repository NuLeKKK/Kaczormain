const Discord = require('discord.js')

module.exports = {
    name: 'kamehameha',
    description: 'pobudka',

    async run(bot, message,args){
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('KAMEHAME-HA')
        .setImage('https://thumbs.gfycat.com/DisfiguredAccurateDuckbillcat-size_restricted.gif')
    
        message.channel.send(embed)
    }
}