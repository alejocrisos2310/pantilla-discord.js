const { ActivityType } = require("discord.js");

module.exports = {
    name: 'ready',

    execute: (args, client) => {

      client.user.setPresence({
        activities: [{ name: `como vendo bonai#7336 hace un npm`, type: ActivityType.Watching }],
        status: 'online',
      });
      console.log("activo")

  }
}