# 🎵 G4 - Discord Music Bot

Bot musical para Discord desenvolvido em **Node.js** com **discord.js v14**, capaz de tocar vídeos ou playlists do YouTube, gerenciar fila de músicas e controlar a reprodução por comandos de texto.  
Ideal para pequenos servidores de amigos que querem curtir som sem complicação.

---

## 🚀 Funcionalidades

| Comando                        | Ação                                                                                              |
|--------------------------------|----------------------------------------------------------------------------------------------------|
| `;;G4 toca essa pra mim <url/termo>` | Toca um vídeo, playlist ou resultado de busca do YouTube. Se já houver algo tocando, adiciona à fila. |
| `;;G4 toca a proxima`          | Toca o próximo item da fila.                                                                      |
| `;;G4 bebe uma breja`          | Alterna entre **pause** e **resume**.                                                             |
| `;;G4 pode ir pro after`       | Sai do canal de voz e limpa toda a fila.                                                          |
| `;;G4 reseta essa lista`       | Limpa a fila sem desconectar do canal.                                                            |
| `;;G4 tem quantas ainda`       | Informa quantas músicas restam na fila.                                                           |
| Slash `/ping`                  | Retorna **Pong!** (exemplo de comando de aplicação).                                              |

\* Prefixo padrão: `;;G4`  
\* O bot responde com reações ✅ ou mensagens de feedback conforme o status da fila.

---

## 🧰 Tecnologias & Bibliotecas

- **Node.js** (ES Modules)  
- **discord.js v14** (GatewayIntentBits, slash commands)  
- **@discordjs/voice** (streaming de áudio em canais de voz)  
- **play-dl** (stream do YouTube + pesquisa + playlists)  
- **ffmpeg** (processamento/transformação de áudio)  
- **dotenv** (segurança das variáveis de ambiente)

> **Requisito extra:** esteja com `ffmpeg` instalado e disponível no PATH do seu sistema.

---

## 📂 Estrutura do Projeto
```bash
Music-Bot/
├── index.js
├── events/
│ ├── interactionCreate.js # responde aos slash commands
│ └── messageCreate.js # processa todos os comandos de texto ;;G4
├── .env.example
└── package.json

```
yaml
Copiar
Editar

---

## 🔧 Configuração

1. **Clone o repositório**

```bash
git clone https://github.com/Matheus-Hen/Music-Bot.git
cd Music-Bot
```
Instale as dependências
```bash
npm install
```
2. **Crie o .env**

Copie o arquivo .env.example e renomeie para .env, depois preencha:
```bash
TOKEN=SEU_TOKEN_DE_BOT
ID_CLIENT=ID_DO_CLIENTE_APLICACAO
```
3. **Inicie o bot**

```bash
node index.js
```
O bot registrará o slash command /ping automaticamente na inicialização.

🎮 Como usar
Convide o bot para o seu servidor usando o link de autorização do Discord (Scopes: bot, applications.commands; Permissões: Send Messages, Connect, Speak, Use Slash Commands).

Entre em um canal de voz.

No chat de texto, digite por exemplo:
```text
;;G4 toca essa pra mim https://www.youtube.com/watch?v=dQw4w9WgXcQ
```
ou

```text
;;G4 toca essa pra mim never gonna give you up
```
O G4 reagirá ✅, entrará no canal e começará a tocar. Use os demais comandos para controlar a reprodução.

✍️ Autor
Matheus Henrique de Lázaro Silva <br>
Desenvolvedor Full Stack • React.js • Node.js
LinkedIn – GitHub

Projeto pessoal para estudo de integrações em tempo real, streaming de mídia e arquitetura event-driven com Node.js. Pull requests e sugestões são muito bem-vindos!
