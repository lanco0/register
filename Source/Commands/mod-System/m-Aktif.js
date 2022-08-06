const { MessageEmbed, Permissions } = require("discord.js");
const config = require("../../Configs/serverConfig");
const emojiConfig = require("../../Configs/emojiConfig");
let girisgif = config.girisgifler[Math.floor(Math.random() * config.girisgifler.length)];

module.exports.run = async (bot, message, args) => {
  if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR))
    return message
      .reply({
        content: `> ${emojiConfig.başarısız} **Başarısız!** Bu komutu kullanman için **Yönetici** yetkisine sahip olman gerekiyor!`,
        allowedMentions: { repliedUser: false },
      })
      .catch((err) => {});

  let embed = new MessageEmbed()
    .setDescription(
      `Sunucu aktif @everyone ;

* Sunucu Bilgileri *

* Sunucu İP Adresi: 91.151.94.191
* TeamSpeak 3 Adresi: **YAKINDA**

Sunucumuz aktif ve roller başlıyor herkesi bekliyoruz ❤️ `
    )
    .setImage(girisgif)
    .setColor("RANDOM");

  message.channel.send({ embeds: [embed] });
};
module.exports.conf = {
  name: "aktif",
  aliases: [],
};
