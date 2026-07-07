const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,

  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ayuda") {
      await interaction.reply({
        content: `# 🌸 Lisolette

¡Hola! Soy tu asistente para Mudae.

## 📚 Disponible

📖 **/ayuda** - Muestra este panel.

🚧 Próximamente:
• 💎 Kakera
• ❤️ Wishlist
• 🎴 Mudae
• ⏰ Recordatorios
• ⚙️ Configuración`,
      });
    }
  },
};
