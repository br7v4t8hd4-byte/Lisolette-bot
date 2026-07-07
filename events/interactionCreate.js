const {
  Events,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,

  async execute(interaction) {

    if (interaction.isChatInputCommand() && interaction.commandName === "ayuda") {

      const botones = new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("mudae")
          .setLabel("🎴 Mudae")
          .setStyle(ButtonStyle.Primary),

        new ButtonBuilder()
          .setCustomId("kakera")
          .setLabel("💎 Kakera")
          .setStyle(ButtonStyle.Success)
      );

      await interaction.reply({
        content: "🌸 **Lisolette**\n\nSelecciona una opción:",
        components: [botones],
      });
    }

    if (interaction.isButton()) {

      if (interaction.customId === "mudae") {
        await interaction.reply("🎴 Guía de Mudae (próximamente).");
      }

      if (interaction.customId === "kakera") {
        await interaction.reply("💎 Guía de Kakera (próximamente).");
      }

    }
  },
};
