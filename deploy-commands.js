require("dotenv").config();

const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Comprueba si el bot está en línea.")
    .toJSON(),
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationCommands("1523894542191956081"),
      { body: commands }
    );

    console.log("Comando registrado.");
  } catch (error) {
    console.error(error);
  }
})();
