module.exports = {
    name: 'CreateChannel',
    aliases: ['create', 'cc', 'createchannel'],
    description: "this is a ping command!",
    async execute(message, args) {
        let name = args.slice(' ').join(' ')
        message.guild.channels.create(name, {
            type: 'voice',
        })
    }
}