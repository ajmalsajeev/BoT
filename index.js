const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTczNjE4Njg3MDg3MTA0MTUx.Gcam-S.4z87qmGYHR9zW8oeFOTxOSh-C5ZhYOZOinCUYw"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)