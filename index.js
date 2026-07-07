require("dotenv").config();

const fs = require("fs");
const path = require("path");

const {
  Client,
  Collection,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.commands = new Collection();

// Registrar comandos
const commands = [
  new SlashCommandBuilder()
    .setName("ayuda")
    .setDescription("Muestra el panel de ayuda de Lisolette.")
    .toJSON(),
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

// Cargar eventos
const eventsPath = path.join(__dirname, "events");
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);

  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// Registrar comandos cuando el bot inicie
client.once("ready", async () => {
  try {
    await rest.put(
      Routes.applicationCommands("1523894542191956081"),
      { body: commands }
    );

    console.log("✅ Comandos registrados.");
  } catch (error) {
    console.error(error);
  }
});

client.login(process.env.TOKEN);
