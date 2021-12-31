const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "simple help command",

    async run (bot, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('🔧 Prefix- `kv12`')
        .setAuthor('Command List', message.author.displayAvatarURL())

        .addFields(
        {
            name: '❗❗ Administracyjne',
            value: '`Ban` | `Kick` | `Warn` | `Deletewarns` | `Warnings` | `Dm` | `Clear` | `Slowmode` | `Lock` | `Unlock` | `Nickname`', 
        },
        {
            name: '🤭 Information',
            value: '`Alarm` | `Poll` | `Covid` | `Userinfo` | `Avatar` | `Serverinfo` | `Botinfo` | `Weather` | `Twitter` ',        
        },
        {
            name: '😼 Anime',
            value: '`Wallpaper` | `Anime` | `Animeinfo`',        
        },
        {
            name: '🎵 Music',
            value: '`Play` | `Skip` | `Stop` | `Loop` | `Queue`',        
        },
        {
            name: '🤪 Fun',
            value: '`Ppsize` |`Mc` | `Ohno` | `Changemymind` | `Phub` | `Howgay` | `8B` | `Meme` | `Ship` | `Ascii` | `Horny` | `Love/Love2` | `Wideavatar` | `Triggered` | `Jail` | `Rip` ',          
        },
        {
            name: '😻 Zwierzątka',
            value: '`Kot` | `Lis` | `Pies` | `Bird` | `Panda` | `Koala`',          
        },
        {
            name: '💬 Other',
            value: '`Ping` | `Suggest` | `yt-t`',
        },
        {
            name: '🤩 Napisz do mnie',
            value: '`NuLeK#2990`',
        },)
        .setFooter(message.author.tag, message.author.avatarURL())

        message.channel.send(help)
    }
}