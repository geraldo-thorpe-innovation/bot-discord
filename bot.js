const Discord = require('discord.js')

const client = new Discord.Client()

client.on('ready', () => {
    client.user.setActivity('com corações alheios', { type: "PLAYING" })
})

const prefix = "!";

const test1 = 'Nzg5MzQ1NTI0MjQ3MDM1OTM0'
const test2 = 'X9wtTg.61rOVHIR2eYm8XmsL43V5vFAyWw'

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
  
    if (command === "julianalou") {
      message.reply(`VOCÊ ESTÁ ABENÇOADO PELA DEUSA JULIANA KIDO :pray: :pray: :pray:`);
    } 
  
    else if (command === "blessed") {
      message.reply(`meu grupo e todos os seres humanos, servirmos a Juliana Lou :pray:!`);
    }
  });


client.login(test1 + '.' + test2)

