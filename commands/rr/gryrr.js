const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'gierkirr',
    description: 'Gierkirr',

    run:async(bot, message, args) => {

        const game = new MessageEmbed()
        .setTitle("Wybierz gre")
        .setDescription(`Wybierz gre a admini dodadzΔ ci jΔ w CiΔgu 24h \n
        πΊοΈ - Minecraft \n
        π - Grand Theft Auto 5 \n
        π - Grand Theft Auto San Andreas \n
        π - Euro Truck Simulator 2 \n
        π - American Truck Simulator \n
        π - Farming Simulator \n
        π - My Summer Car \n
        π― - Volorant \n
        π« - CS:GO \n
        π - Fortnite`)
        .setFooter("Niestety coΕ nam sie popsuΕo z Reaction role dlatego tak jest <3")
       
        message.channel.send(game)
        .then(m => {
            m.react("πΊοΈ");
            m.react("π");
            m.react("π");
            m.react("π");
            m.react("π");
            m.react("π");
            m.react("π");
            m.react("π―");
            m.react("π«");
            m.react("π");
    })
}}