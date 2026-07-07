const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,

  async execute(member) {
    const canal = member.guild.systemChannel;

    if (!canal) return;

    await canal.send(
      `🌸 ¡Bienvenido ${member} a **${member.guild.name}**!\n\nSoy **Lisolette**, tu asistente para Mudae.\nUsa **/ayuda** para comenzar.`
    );
  },
};
