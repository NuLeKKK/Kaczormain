const chalk = require('chalk');
const figlet = require("figlet");

module.exports = async (client) => {
  client.Ready = true;
  client.user.setActivity("TicketKaczor", { type: "STREAMING", url:"https://www.twitch.tv/nulekkk" }).then(() => {
    client.Manager.init(client.user.id);
    client.log("Successfully Logged in as " + client.user.tag);
  });
  client.RegisterSlashCommands();
};
