const { MessageEmbed, Permissions } = require("discord.js");
const config = require("../../Configs/serverConfig");

module.exports.run = async (bot, message, args) => {
  let embed = new MessageEmbed()
    .setDescription(
      `DR Hogwarts Roleplay Giriş bilgilerimiz ;

* Sunucu Bilgileri *

* Sunucu İP Adresi: 
* TeamSpeak 3 Adresi: 
* Tıkla ve Bağlan! `
    )
    .setImage("")
    .setColor("RANDOM");

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
};
module.exports.conf = {
  name: "restart",
  aliases: [],
};
