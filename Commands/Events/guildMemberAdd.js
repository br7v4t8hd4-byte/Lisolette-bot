const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberAdd,

  async execute(member) {
    const canal = member.guild.systemChannel;

    if (!canal) return;

    canal.send(
      `🌸 ¡Bienvenido ${member} a **${member.guild.name}**!

Soy **Lisolette**, tu asistente para Mudae.

✨ Usa **/ayuda** para comenzar.`
    );
  },
};
