const Discord = require('discord.js');
const { ActivityType, channelMention } = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client({intents: (32767)});

client.on('ready', () => {
    console.log("=============================================================");
    console.log(`LMFAOOO!! I GOT ${client.user.tag} RUNNIINNGGGG`);
    console.log("=============================================================");
    client.user.setActivity('Some server, Idiot ;-;', { type: ActivityType.Watching });
});

client.on("guildMemberAdd", (member) => {
    console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
    member.guild.channels.cache.find(c => c.name === "•♡system♡•").send(`"${member.user}" has joined the server! \n Member += 1`);
  });

client.on("guildMemberRemove", (member) => {
    member.guild.channels.cache.find(c => c.name === "•♡system♡•").send(`"${member.user}" has left the server \n Member -= 1`)
 });

client.on("guildBanAdd", (member) => {
    member.guild.channels.cache.find(c => c.name === "•♡system♡•").send(`The ban hammer has spoken to "${member.user}"!`)
  });

client.on("guildBanRemove", (member) => {
    member.guild.channels.cache.find(c => c.name === "•♡system♡•").send(`The ban hammer apololigzes to "${member.user}"..`)
  });

client.on("emojiCreate", (member) => {
    member.guild.channels.cache.find(c => c.name === "•♡system♡•").send(`"${member.user}" has created an emoji!`)
  });

client.on("emojiDelete", (member) => {
    member.guild.channels.cache.find(c => c.name === "•♡system♡•").send(`"${member.user}" has deleted an emoji..`)
  });

client.on("messageCreate", (member), (message) => {

})

client.login(token);
