const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: "this is a meme command!",
    async execute(message, args){
        message.channel.send("Pong!")
    }
}