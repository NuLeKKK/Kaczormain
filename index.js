
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const { default_prefix } = require("./config.json")
 const fetch = require("node-fetch");
const db = require("quick.db");
const moment = require("moment");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { emotes , emoji} =require("./config.json")
const discord = require("discord.js");
const client = new discord.Client({
  partials: ['MESSAGE',  'CHANNEL,', 'REACTION' ],
  disableEveryone: false
});
const yts = require('yt-search')


client.queue = new Map();
client.vote = new Map();
const { ready } = require("./handlers/ready.js")

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.queue = new Map()
process.on('unhandledRejection', console.error);

  
client.on("message", async message => {
 

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(default_prefix)) return;

  if (!message.member)
    message.member = message.guild.fetchMember(message);

  const args = message.content
    .slice(default_prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});


client.on("guildMemberAdd", async member => {

  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {

    return;

  }
 let data = await canva.welcome(member, { link: "https://cdn.discordapp.com/attachments/815889737750544405/827575020338675822/welcome_imgae.png",blur: false }) 
   const attachment = new discord.MessageAttachment(

      data,

      "welcome-image.png"

    );
 client.channels.cache.get(chx).send(`Welcome to ${member.guild.name}, Server ${member.user}\nYou are our ${member.guild.memberCount}th Member. Enjoy `, attachment);

});




client.on("message", async message => {
if (message.channel.name == "chatbot") {
if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=cwkhan`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`> ${message.content} \n <@${message.author.id}> ${data.message}`);
    });
      message.channel.stopTyping();
}
});
client.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.id === '914892406590144524');
  let welcomeRole2 = guildMember.guild.roles.cache.find(role => role.id === '914892406590144527',);
  let welcomeRole3 = guildMember.guild.roles.cache.find(role => role.id === '914892406606946351');
  let welcomeRole4 = guildMember.guild.roles.cache.find(role => role.id === '914892406636310560');
  let welcomeRole5 = guildMember.guild.roles.cache.find(role => role.id === '914892406636310565');

  guildMember.roles.add(welcomeRole);
  guildMember.roles.add(welcomeRole2);
  guildMember.roles.add(welcomeRole3);
  guildMember.roles.add(welcomeRole4);
  guildMember.roles.add(welcomeRole5);

  guildMember.guild.channels.cache.get('914892406871175188').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
});
client.on('guildMemberAdd', member => {
  member.send('Witaj na Serwerze **Kaczory Nulka**')
})




const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
    storage: "./handlers/giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

client.giveawaysManager = manager;

client.on("message", async message => {
if(!message.guild) return;
  let prefix = db.get(`default_prefix${message.guild.id}`)
  if(prefix === null) prefix =default_prefix;
  
  if(!message.content.startsWith(default_prefix)) return;
 
})
client.on("ready", () => {{}
    client.user.setStatus("online");
    console.log("Goku is Ready to using")
});



const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEmpty: false,
});

client.player = player;

new Player(client, {
    leaveOnEnd: true,
    leaveOnStop: true,
    leaveOnEmpty: true,
    timeout: 10,
    volume: 150,
    quality: 'high',
});
const fs = require('fs')


 client.on('guildCreate', guild =>{

    const channelId = ''; //put your channel ID here

    const channel = client.channels.cache.get(channelId); 
     
    if(!channel) return; //If the channel is invalid it returns
    const embed = new discord.MessageEmbed()
        .setTitle('I Joined A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
    channel.send(embed);
});


client.on('guildDelete', guild =>{
    const channelId = '';//add your channel ID
    const channel = client.channels.cache.get(channelId); //This Gets That Channel
    
    if(!channel) return;  //If the channel is invalid it returns
    const embed = new discord.MessageEmbed()
        .setTitle('I Left A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
        .setTimestamp()
        .setColor('RED')
        .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
    channel.send(embed);
});

 

const smartestchatbot = require('smartestchatbot')
const scb = new smartestchatbot.Client()

client.on("message", async message => {
  if (message.channel.name == "abotchat") {
    if (message.author.bot) return;
    message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
    if (message.content.includes(`@`)) {
      return message.channel.send(`**:x: Please dont mention anyone**`);
    }
    message.channel.startTyping();
    if (!message.content) return message.channel.send("Please say something.");
    scb.chat({message: message.content, name: client.user.username, owner:"cwkhan", user: message.author.id, language:"auto"}).then(reply => {
    message.inlineReply(`${reply}`);
    })
    message.channel.stopTyping();
  }
});


require("./ExtendedMessage");


    allowedMentions: {
        // set repliedUser value to `false` to turn off the mention by default
        repliedUser: true
    }
    
    

client.login(process.env.TOKEN);
