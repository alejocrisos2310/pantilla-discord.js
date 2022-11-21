const { Client, Collection, EmbedBuilder, Discord } = require("discord.js");
const { readdirSync } = require("fs");
const client = new Client({
  intents: ["Guilds", "GuildMembers", "GuildMessages", "MessageContent"],
  partials: [0, 3, 2, 6]
});


client.Config = require("./config.json");
client.commands = new Collection();

const commandFolders = readdirSync('./commands');
for(const folder of commandFolders){
  const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for(const file of commandFiles){
		const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command)
  };
};


const eventFiles = readdirSync("./events").filter(file => file.endsWith(".js"))
for(const file of eventFiles) {
  const event = require(`./events/${file}`)
  client.on(event.name, (...args) => event.execute(...args, client, EmbedBuilder))
}


client.login(client.Config.token)