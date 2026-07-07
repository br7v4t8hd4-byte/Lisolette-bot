const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,

  async execute(member) {
    const channel = member.guild.systemChannel;

    if (!channel) return;

    await channel.send(
      `🌸 ¡Bienvenido ${member} a ${member.guild.name}!`
    );
  },
};
