const Discord = require("discord.js"); //require discord
const bot = new Discord.Client({disableEveryone: true}); //create the bot
const { token, prefix } = require("./settings.json");

bot.on("ready", () => { //when bot is ready broadcast message
    console.log(`${bot.user.username} is online and is running on ${bot.guilds.size} servers!`);
    bot.user.setActivity("i just got created!"); //you can set this to whatever you want
});

bot.on("message", async msg => { //when message sent
    if (msg.author.bot) return; //if the author is a bot do nothing
    if (!msg.content.startsWith(prefix)) return; //if the message does not start with the prefix do nothing


    let args = message.content.slice(prefix.length).trim().split(/ +/g); //for use in building commands
    let cmd = args.shift().toLowerCase(); //for use in building commands


    if (msg.content.startsWith(prefix + "ping")) { //basic ping command
        return msg.channel.send("Pong!");
    }
    //add more commands here!
});

bot.login(token); //login with the bot token defined in settings.json file