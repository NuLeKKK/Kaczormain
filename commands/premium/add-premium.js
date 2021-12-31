const { db } = require("../../index")
const DJS = require("discord.js")

module.exports = {
    name: 'addpremium',
    description: 'premium add serwer',
    /**
     * @param {DJS.Client} client Discord client
     * @param {DJS.Message} message Message
     * @param {String[]} args Arguments   
     */
    run: async(client, message, args) => {

        let adminID = ["495482475825332225"]

        if (!adminID.includes(message.author.id)) return;

        if (adminID.includes(message.author.id)) {
            
            if (!args[0]) return message.channel.send("please provide me a servers id")

            message.channel.send('Udało sie dodać \`${args[0]}\` ma premium bota')
            db.set('premium', args[0])
        }
    }
}