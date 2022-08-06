const { MessageEmbed, Permissions } = require("discord.js");
const config = require("../../Configs/serverConfig");
const emojiConfig = require("../../Configs/emojiConfig");
let bakimgif = config.bakimgifler[Math.floor(Math.random() * config.bakimgifler.length)];

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
      `DR Roleplay

Sunucumuz daha iyi bir rol kalitesi sunmak için bakıma giriyor En yakın zamanda sunucu aktif olacaktır. @everyone 

                                                                              DR Roleplay Yönetim `
    )
    .setImage(bakimgif)
    .setColor("RANDOM");

  message.channel.send({ embeds: [embed] });
};
module.exports.conf = {
  name: "bakım",
  aliases: [],
};
