const Discord = require("discord.js");
const client = new Discord.Client();
const request = require('request');

client.on('ready', () => {
  console.log(`BOT LIGADO`);
  client.user.setPresence({ game: { name: `CCleaner`, type: 0} });
});

// Anti chat
client.on('message',async  (msg) => {
    var is_PM = msg.channel.type == "dm";
    var message = msg;
    if(is_PM && msg.author.id != "393126227696943105"){
        return msg.reply("**Sem mensagens no privado!**.");
    }

    if(msg.content.split(" ")[0].indexOf(".") < 0){
        return;
    }
    var cmd = msg.content.split(" ")[0];

 if(cmd == ".teste"){
    msg.channel.send("**STATUS: ON**");
 }
   
 //lag daporra
// >
    //Qualquer comando a bai

    //Ban/Kick
    if(cmd == "!ban") {
        let modRole = msg.guild.roles.find("name", "FUNDADOR");
        if(msg.member.roles.has(modRole.id)) { 
          let banMember = msg.guild.member(msg.mentions.users.first());
          msg.guild.member(banMember).ban();
          msg.channel.sendMessage("Membro **banido** com sucesso :call_me:.");
        } else {
          return msg.reply("Você não tem **permissão** de **banir** outros **usuários**.");
        }
      }

      if(cmd == "!kick") {
        let modRole = msg.guild.roles.find("name", "FUNDADOR");
        if(msg.member.roles.has(modRole.id)) { 
          let banMember = msg.guild.member(msg.mentions.users.first());
          msg.guild.member(banMember).kick();
          msg.channel.sendMessage("Membro **kickado** com sucesso :call_me:.");
        } else {
          return msg.reply("Você não tem **permissão** de **kickar** outros **usuários**.");
        }
      }
      //Ban/Kick
	  
});
client.login('MzkzMTI2MjI3Njk2OTQzMTA1.DRxP8w.cXLNbL53n39PJ3lKFG1MojBmol8'); //Token do seu bot
