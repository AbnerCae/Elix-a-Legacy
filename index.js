const aoijs = require("aoi.js");
const bot = new aoijs.Bot({
token: process.env.TOKEN,
prefix: "PREFIX",
intents: ["GUILDS", "GUILD_MESSAGES"]
});
bot.onMessage();
