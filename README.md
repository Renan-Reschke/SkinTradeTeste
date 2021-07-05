# Class Skins
Projeto em desenvolvimento de um site de troca de skins do jogo Counter Strike: Global Offensive usando node.js.

## Requisito para funcionamento
Criar um arquivo com nome "secret.js" com a seguinte estrutura:
~~~javascript
module.exports = {
        siteName: '',       // Will be displayed under the "All bots" tab e.g. "Keys Only"
        accountName: '',    // bot_1 username (login)
        password: '',       // bot_1  password
        twoFactorCode: '',  // shared_secret value
        identitySecret: '', // identity_secret value
        steamID64: '',      // SteamID64 of bot account can be found here: "https://steamid.io/"
        personaName: '',    // Nickname for bot account, will change on restart
        steamApiKey: '',    // Your Steam API key, get it here: https://steamcommunity.com/dev/apikey
        SteamApisKey: '',   // Your SteamApis.com key, get it here: https://steamapis.com
}
~~~