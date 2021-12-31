module.exports = {
    name: "dm",
    description: "DM a user in the guild",
    category: "fun",
    run: async (bot, message, args) => {
      if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send("Nie masz wystarczających uprawnień!");
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `Nie wspomniałeś o użytkowniku lub podałeś nieprawidłowy id`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("Nie określiłeś swojej wiadomości");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("Ten użytkownik nie mógł zostać wysłany na DM!"))
        .then(() => message.channel.send(`Wysłałem wiadomość do ${user.user.tag}`));
    },
  };