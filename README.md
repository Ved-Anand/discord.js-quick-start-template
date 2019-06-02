# A quick setup for a discord bot

Note: This will only work for discord.js!

## Setup

Firstly, make sure you have downloaded [node](https://nodejs.org/en/download/).
Then, use git to clone this repository. This will generate a new directory called Quick-Discord-Setup
```bash
git clone https://github.com/Phatfox2/Quick-Discord-Setup.git
```
Enter the directory and then use the package manager [npm](https://www.npmjs.com/) to install discord.js. Don't worry about installing npm; it comes with node. Also, if you get some warns from doing this, just ignore them.
```bash
cd Quick-Discord-Setup
npm install discord.js --save
```
Now, if you haven't already, make the [discord bot application](https://discordapp.com/developers/applications/) on the [discord homepage](discord.com), and get it onto your server. If you have not made a discord bot application yet, or have not got the bot onto your server, check out [this link](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)

And the basic framework of the bot is good to go!
## Changing the settings

Open the folder the bot is in in a code editor such as Atom, VS code, notepad++, etc. Click on the settings.json file. Where it tells you to put the bot token, copy and paste it in. Also, choose your selected prefix. The prefix is what lets the bot know whether or not you are trying to run a command. Example Prefixes: $, !, ? 
```json
{
  "token": "your bot token here!",
  "prefix": "the selected prefix here!"
}
```
Once this is done, you're good to go!

## Running the bot

Running the bot is surprisingly simple. Navigate to the directory that the bot is in, and then type node index.js. A bit later, some messages should pop up.
```bash
C:\Quick-Discord-Setup\>node index.js
TestBOT is online and is running on 2 servers!
```
And you should be good to go! To make sure the bot is working, hop into the server that the bot is in, and type the command prefix you chose, and then ping. E.g. $ping, ?ping, !ping

## Adding new commands/Making Edits

If you wish to add new commands, there are plenty of comments in the index.js file explaining where you would put them.
