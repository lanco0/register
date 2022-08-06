const { joinVoiceChannel } = require("@discordjs/voice");
const { playing } = require("../Configs/botConfig");
const config = require("../Configs/serverConfig");
const Gamedig = require("gamedig");
const bot = global.client;

module.exports = async () => {
  Gamedig.query({
    type: "garrysmod",
    host: config.serverIP,
  })
    .then(async (x) => {
      bot.user.setPresence({
        activities: [{ name: `${x.players.length}/${x.maxplayers}` }],
        status: "idle",
      });
    })
    .catch((e) => {
      bot.user.setPresence({
        activities: [{ name: `0/0` }],
        status: "idle",
      });
    });

  setInterval(async () => {
    Gamedig.query({
      type: "garrysmod",
      host: config.serverIP,
    })
      .then(async (x) => {
        bot.user.setPresence({
          activities: [{ name: `${x.players.length}/${x.maxplayers}` }],
          status: "idle",
        });
      })
      .catch((e) => {
        bot.user.setPresence({
          activities: [{ name: `0/0` }],
          status: "idle",
        });
      });
  }, 600000);

  var channel = bot.channels.cache.get(config.voiceChannelID);
  if (!channel) return;
  
  await joinVoiceChannel({ channelId: channel.id, guildId: channel.guild.id, adapterCreator: channel.guild.voiceAdapterCreator, });
  setInterval(async () => await joinVoiceChannel({ channelId: channel.id, guildId: channel.guild.id, adapterCreator: channel.guild.voiceAdapterCreator, }), 3600000);
};
module.exports.conf = {
  name: "ready",
};
