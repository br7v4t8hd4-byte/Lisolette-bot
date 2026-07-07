const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,

  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ayuda") {
      await interaction.reply({
        embeds: [
          {
            color: 0xff69b4,
            title: "🌸 Lisolette",
            description: "¡Hola! Soy tu asistente para Mudae.",
            fields: [
              {
                name: "📚 Disponible",
                value: "`/ayuda` - Muestra este menú.",
              },
              {
                name: "🚧 Próximamente",
                value:
                  "💎 Kakera\n❤️ Wishlist\n🎴 Mudae\n⏰ Recordatorios\n⚙️ Configuración",
              },
            ],
            footer: {
              text: "Lisolette • Asistente para Mudae",
            },
          },
        ],
      });
    }
  },
};
