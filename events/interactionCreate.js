import { client } from '../index.js'

import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export const interactionCreate = () => {

  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
      await interaction.reply("!Pong")
    }
  });

  client.login(process.env.TOKEN)
}
