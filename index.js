require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  Events,
  REST,
  Routes,
  SlashCommandBuilder,
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, async (readyClient) => {
  console.log(`🌸 ${readyClient.user.tag} está en línea.`);

  const commands = [
    new SlashCommandBuilder()
      .setName("ayuda")
      .setDescription("Muestra el panel de ayuda de Lisolette.")
      .toJSON(),
  ];

  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  try {
    await rest.put(
      Routes.applicationCommands("1523894542191956081"),
      { body: commands }
    );

    console.log("✅ Comando /ayuda registrado.");
  } catch (error) {
    console.error(error);
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ayuda") {
    await interaction.reply({
      content: `# 🌸 Lisolette

¡Hola! Soy tu asistente para Mudae.

## 📚 Comandos disponibles

📖 /ayuda - Muestra este menú.

🚧 Próximamente:
• Mudae
• Kakera
• Wishlist
• Badges
• FAQ
• Eventos

✨ Gracias por usar Lisolette.`,
    });
  }
});

client.login(process.env.TOKEN);
