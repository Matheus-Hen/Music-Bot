import { Client, GatewayIntentBits, REST, Routes } from 'discord.js'
import dotenv from 'dotenv';
import { interactionCreate } from './events/interactionCreate.js'
import { messageCreate } from './events/messageCreate.js';

dotenv.config({ path: './.env' });



export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessageReactions
  ]
});

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.ID_CLIENT), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

//Commands
interactionCreate()
messageCreate()
