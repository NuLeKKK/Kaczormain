const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "weather",
    description: "Pokazuje aktualną pogodę w określonej lokalizacji",

    async run (bot, message, args) {
        weather.find({search: args.join(" "), degreeType: `C`}, function (error, result) {
            if(error) return message.channel.send(error);
            if(!args[0]) return message.channel.send('Proszę podać lokalizację!')

            if(result === undefined || result.length === 0) return message.channel.send('**Nie ważna** Lokalizacja!!')

            var current = result[0].current;
            var location = result[0].location;

            const embed = new Discord.MessageEmbed()
            .setColor(0x111111)
            .setAuthor(`Prognoza pogody dla ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setDescription(`**${current.skytext}**`)
            .addField('Strefa czasowa', `UTC ${location.timezone}`, true)
            .addField('Rodzaj stopnia', 'Celcius', true)
            .addField('Temperatura', `${current.temperature}°`, true) 
            .addField('Wiatr', `${current.winddisplay}`, true)
            .addField('Czuje się jak', `${current.feelslike}°`, true)
            .addField('Wilgotność', `${current.humidity}%`, true)

            message.channel.send(embed)
        })
    }
}