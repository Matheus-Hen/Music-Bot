import { createRequire } from "module";
const { createAudioPlayer, createAudioResource,joinVoiceChannel } = createRequire(import.meta.url)("@discordjs/voice");
import { client } from '../index.js'
import dotenv from 'dotenv';
import { playlist_info, search, stream, validate } from "play-dl";
import { NoSubscriberBehavior } from "@discordjs/voice";

dotenv.config({ path: './.env' });

const player = createAudioPlayer({
    behaviors: {
        noSubscriber: NoSubscriberBehavior.Play,
    },
})
let queue = []
let pos = 0
let pause = 0


export const messageCreate = () => {
    client.on('messageCreate', async message => {
        let commnad = message.content
        if (commnad.startsWith(";;G4 toca essa pra mim") == true) {
            let busca = message.content
            busca = busca.split(' ').splice(5).join(' ')
            const valid = await validate(busca)
            if (valid == 'yt_video') {
                let connectAudio = ChannelVoice(message, client)
                if (connectAudio == null) return message.reply("Quer que eu toque na sua mente? Entre em um canal de voz")
                else message.react('✅')
                if (player._state.status == 'idle') {
                    const audioMusic = await stream(busca)
                    const resourse = createAudioResource(audioMusic.stream, {
                        inputType: audioMusic.type
                    })
                    player.play(resourse)
                    connectAudio.subscribe(player)
                }
                else {
                    queue.push(busca)
                    message.reply("Espera ai que o G4 já vai tocar! Quantidade atual: " + queue.length)
                }
            }
            if (valid == 'yt_playlist') {
                const result = await playlist_info(busca)
                for (let i = 0; i < result.videos.length; i++) {
                    queue.push(result.videos[i].url)
                }
                let connectAudio = ChannelVoice(message, client)
                if (connectAudio == null) return message.reply("Quer que eu toque na sua mente? Entre em um canal de voz")
                else message.react('✅')
                if (player._state.status == 'idle') {
                    const audioMusic = await stream(queue[0])
                    const resourse = createAudioResource(audioMusic.stream, {
                        inputType: audioMusic.type
                    })
                    player.play(resourse)
                    connectAudio.subscribe(player)
                    message.reply("Espera ai que o G4 já vai tocar todas! Quantidade atual: " + queue.length)
                    pos++
                }
                else message.reply("Espera ai que o G4 já vai tocar todas! Quantidade atual: " + queue.length)
            }
            if (valid == 'search') {
                const result = await search(busca, { limit: 1 })
                let connectAudio = ChannelVoice(message, client)
                if (connectAudio == null) return message.reply("Quer que eu toque na sua mente? Entre em um canal de voz")
                else message.react('✅')
                if (player._state.status == 'idle') {
                    const audioMusic = await stream(result[0].url)
                    const resourse = createAudioResource(audioMusic.stream, {
                        inputType: audioMusic.type
                    })
                    player.play(resourse)
                    connectAudio.subscribe(player)
                }
                else {
                    queue.push(result[0].url)
                    message.reply("Espera ai que o G4 já vai tocar! Quantidade atual: " + queue.length)
                }
            }
            if (valid == false) {
                return message.reply('G4 não achou essa')
            }
        }

        if (commnad.startsWith(";;G4 pode ir pro after") == true) {
            ChannelVoice(message, client).destroy()
            queue.length = 0;
            pos = 0
            await message.reply("G4 tá vazando")
        }
        if (commnad == ';;G4 toca a proxima') {
            if (client.voice.adapters.size == 0) return
            else {
                if (queue.length == 0) return message.reply("Sem musicas na lista")
                else {
                    if (queue.length > pos) {
                        if (player._state.status != 'idle') {
                            let connectAudio = ChannelVoice(message, client)
                            if (connectAudio == null) return message.reply("Quer que eu toque na sua mente? Entre em um canal de voz")
                            else message.react('✅')
                            const audioMusic = await stream(queue[pos])
                            const resourse = createAudioResource(audioMusic.stream, {
                                inputType: audioMusic.type
                            })
                            player.play(resourse)
                            connectAudio.subscribe(player)
                            pos++
                        }
                    }
                    else return message.reply("Lista vazia")
                }
            }
        }
        if (commnad.startsWith(";;G4 bebe uma breja") == true) {
            if (pause == 0) {
                player.pause()
                pause = 1
            }
            else {
                player.unpause()
                pause = 0
            }
        }
        if(commnad.startsWith(";;G4 reseta essa lista") == true){
            queue.length = 0;
            pos = 0
        }
        if(commnad.startsWith(";;G4 tem quantas ainda") == true)message.reply("Espera ai que o G4 já vai tocar todas! Quantidade atual: " + queue.length)
    })

};


function ChannelVoice(event, client) {
    let channel = event.member.voice.channel
    if (channel != null) {
        if (client.voice.adapters.size == 0) event.reply('G4 tá chegando')
        return joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        })
    } else return null
} 