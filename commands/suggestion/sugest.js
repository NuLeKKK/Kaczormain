const Discord = module.require("discord.js");

module.exports = {
    name: "suggest",
    description: "Suggest Features for Infinity",
    run: async(client, message, args) => {
        const avatar = message.author.avatarURL;
        const suggestchannel = client.channels.cache.get("921751509413281862")
        const suggestion = args.join(" ");
        if (!suggestion) {
        return message.channel.send("Proszę coś zasugerować");
        }
        message.channel.send("Dziękujemy za sugerowanie funkcji dla Kaczorka.")
        const embed = new Discord.MessageEmbed()
        .setAuthor(`New Suggestion!`, avatar)
        .setDescription(`${suggestion} \n\nBy: ${message.author.tag}`)
        .setFooter(`ID: ${message.author.id}`)
        .setColor("RANDOM");

        suggestchannel.send({embed});
    }, catch (error) {
        const errorlogs = client.channels.cache.get("921751509413281862")
        message.channel.send("Wygląda na to, że wystąpił błąd. Błąd został zgłoszony do Sekcji Raportów")
        errorlogs.send(`Błąd w poleceniu Sugestji! \nError: \n`+error)
    }
}