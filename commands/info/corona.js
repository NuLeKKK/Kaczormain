const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "Śledź przypadki COVID-19 w kraju lub na całym świecie",

    async run (client, message, args){

        let countries = args.join(" ");

        //Credit to Sarastro#7725 for the command :)

        const noArgs = new Discord.MessageEmbed()
        .setTitle('brakujące argumenty')
        .setColor(0xFF0000)
        .setDescription('Brakuje niektórych argumentów (ex: ;covid all || ;covid Canada)')
        .setTimestamp()

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Światowe statystyki dotyczące COVID-19 🌎`)
                .addField('Potwierdzone przypadki', confirmed)
                .addField('Wyleczone', recovered)
                .addField('Śmierci', deaths)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Statystyki COVID-19 dla **${countries}**`)
                .addField('Potwierdzone przypadki', confirmed)
                .addField('Wyleczone', recovered)
                .addField('Śmierci', deaths)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Podano nieprawidłowy kraj')
            })
        }
    }
}