function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const OJS = OPM.require("owop-js");
const Client = new OJS.Client({
    reconnect: true
});

Client.on("join", () => {
	Client.chat.send("/nick Dragon")
})

Client.on("message", msg => {
	var msget = msg
	if(msget.includes("d!help")) {
		Client.chat.send("Bot commands here: ")
		Client.chat.send("https://pastebin.com/raw/xfeDn6Dc")
	}
	if(msget.includes("d!opensource")) {
		Client.chat.send("Dragon Chat Bot open source:")
		Client.chat.send("https://pastebin.com/raw/r5JyHYNM")
	}
	if(msget.includes("d!owopdiscord")) {
		Client.chat.send("OWOP Discord: https://discord.gg/kEXkhPT4CT")
	}
	if(msget.includes("d!randomnum")) {
		var randomnum = getRandomInt("1","100")
		Client.chat.send(randomnum)
	}
})
