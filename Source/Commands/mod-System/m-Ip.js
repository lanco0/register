const { MessageEmbed, Permissions } = require("discord.js");
const config = require("../../Configs/serverConfig");

module.exports.run = async (bot, message, args) => {
  let embed = new MessageEmbed()
    .setDescription(
      `DR Roleplay Giriş bilgilerimiz ;

* Sunucu Bilgileri *

* Sunucu İP Adresi: 91.151.94.191
* TeamSpeak 3 Adresi: **YAKINDA**`
    )
    .setImage("")
    .setColor("RANDOM");

  message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
};
module.exports.conf = {
  name: "ip",
  aliases: [],
};
