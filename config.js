'use strict'
const secret = require('./secret')
module.exports = {
    appID: 730, // 730 - CS:GO
    contextID: 2, // ContextID
    bots: {
        bot_1: {
            siteName: 'Bot 1',  // Will be displayed under the "All bots" tab e.g. "Keys Only"
            accountName: secret.accountName,    // bot_1 username
            password: secret.password,       // bot_1  password
            twoFactorCode: secret.twoFactorCode,  // shared_secret value
            identitySecret: secret.identitySecret, // identity_secret value
            steamID64: secret.steamID64,  // SteamID64 of bot account can be found here: "https://steamid.io/"
            personaName: 'Class.Skins BOT #1',   // Nickname for bot account, will change on restart
        },
    },
    steamApiKey: secret.steamApiKey,    // Your Steam API key, get it here: https://steamcommunity.com/dev/apikey
    SteamApisKey: secret.SteamApisKey,   // Your SteamApis.com key, get it here: https://steamapis.com
    SteamApisCompactValue: 'safe_ts.last_30d', // Use safe price calculated from 30 days of data, more info: https://steamapis.com/developers (Market Items - Optional Query Parameters "compact_value")
    site: {
        header: 'Class.Skins', // Name/header/title of website. Prefix for  <title></title> (For more: /index.html line: 9) 
        steamGroup: '#',
        copyrights: 'Copyright © Class.Skins 2021',  // Copyright text
    },
    domain: 'localhost',    // Domain name only, follow the example (no http:// & no www & no /)
    website: 'http://localhost',    // Website URL, follow the example (do not add / at the end)
    websitePort: 80,    // Website PORT, don't change it unless you're using a reverse proxy
    tradeMessage: 'Oferta de troca de Class.Skins | Se voce nao requisitou nenhuma troca ou ela parece inconsistente, por favor decline.', // Quite obvious
    rates: {
        ignoreItemsBelow: 0.00, // Ignore items below this price (price * rate < ignoreItemsBelow) - shows (Too Low) for user
        trashPriceBelow: 0.00,   // Items below this price are considered trash, the trash rate modifier will be applied
        // Items
        user: {
            key: 1,
            knife: 0.95,
            rare_skin: 0.95,
            weapon: 0.9,
            misc: 0.85,
            trash: 0.7,
        },
        bot: {
            key: 1.05,
            knife: 1,
            rare_skin: 1,
            weapon: 0.95,
            misc: 0.9,
            trash: 0.8,
        },
    },
}
