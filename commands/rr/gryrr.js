const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'gierkirr',
    description: 'Gierkirr',

    run:async(bot, message, args) => {

        const game = new MessageEmbed()
        .setTitle("Wybierz gre")
        .setDescription(`Wybierz gre a admini dodadzą ci ją w Ciągu 24h \n
        🗺️ - Minecraft \n
        🚔 - Grand Theft Auto 5 \n
        🚘 - Grand Theft Auto San Andreas \n
        🚚 - Euro Truck Simulator 2 \n
        🚛 - American Truck Simulator \n
        🚜 - Farming Simulator \n
        🚖 - My Summer Car \n
        🎯 - Volorant \n
        🔫 - CS:GO \n
        🛒 - Fortnite`)
        .setFooter("Niestety coś nam sie popsuło z Reaction role dlatego tak jest <3")
       
        message.channel.send(game)
        .then(m => {
            m.react("🗺️");
            m.react("🚔");
            m.react("🚘");
            m.react("🚚");
            m.react("🚛");
            m.react("🚜");
            m.react("🚖");
            m.react("🎯");
            m.react("🔫");
            m.react("🛒");
    })
}}