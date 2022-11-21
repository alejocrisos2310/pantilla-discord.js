module.exports = {
    name: 'messageCreate',

    execute: async (message, client, EmbedBuilder) => {

        if(message.author.bot || !message.guild || message.channel.type === 'dm') return;

        const config = require("../config.json")

        var prefix = config.prefix

        if(!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        client.cmd = client.commands.find((c) => c.name === command || (c.alias && c.alias.includes(command)));
        if(client.cmd) {
            client.cmd.execute(client, message, args, EmbedBuilder);
        }
  }
}