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
      .setName("ping")
      .setDescription("Comprueba si el bot está en línea.")
      .toJSON(),
  ];

  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  try {
    await rest.put(
     Routes.applicationCommands("1523894542191956081") ,
      { body: commands }
    );

    console.log("✅ Comando /ping registrado.");
  } catch (err) {
    console.error(err);
  }
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 ¡Pong! Lisolette está funcionando.");
  }
});

client.login(process.env.TOKEN);
