const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,

  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "ayuda") {
      await interaction.reply("🌸 ¡Hola! Soy Lisolette.");
    }
  },
};
