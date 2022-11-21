const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "test",
    alias: [],

    async execute (client, message, args){
        
        message.reply("test");
        
    }
}
