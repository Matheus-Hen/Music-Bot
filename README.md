# 🤖 Discord Bot – Matheus Henrique

Este é um projeto pessoal de um bot para Discord desenvolvido com **Node.js** e a biblioteca `discord.js`. O objetivo do bot é responder a comandos do usuário, executar ações automatizadas no servidor e interagir de forma inteligente com os membros.

## 🚀 Funcionalidades

- Comandos personalizados com prefixo (ex: `!ajuda`, `!info`, etc.)
- Respostas automáticas a palavras-chave e menções
- Boas-vindas a novos membros com mensagens diretas ou em canais específicos
- Reações automáticas a mensagens específicas
- Comandos de administração (ex: limpar mensagens, expulsar usuários)
- Integração com APIs externas (ex: piadas, clima, notícias etc.)

## 🧰 Tecnologias Utilizadas

- **Node.js**
- **Discord.js**
- **Dotenv** (para variáveis de ambiente e segurança)
- **APIs REST externas** (opcional, para comandos personalizados)
- **Railway / Repl.it / Heroku** (para deploy — ajustar conforme seu caso)

## 🛠️ Como Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/Matheus-Hen/NomeDoRepositorio

# 2. Acesse a pasta do projeto
cd NomeDoRepositorio

# 3. Instale as dependências
npm install

# 4. Configure o token do bot
Crie um arquivo `.env` com a variável:
DISCORD_TOKEN=seu_token_aqui

# 5. Inicie o bot
node index.js
```
📂 Estrutura do Projeto
```bash
├── index.js
├── comandos/
│   └── ajuda.js
│   └── info.js
├── eventos/
│   └── mensagem.js
│   └── entradaServidor.js
├── .env
├── package.json
```

✍️ Autor
Matheus Henrique de Lázaro Silva <br>
Desenvolvedor Full Stack | React.js • Node.js • APIs REST
