import { Logger } from "@lyingnet/logger";
import { ExtendedClient } from "./lib/Client";

const log = new Logger();

const client = new ExtendedClient();

client.login(process.env.TOKEN).then(() => {
  log.info("Logged in!:" + client.user?.username);
});

client.on("messageCreate", (msg) => {
  if (msg.author.username === "lyinguh")
    msg.reply("Congrats! You have leveled up! your level is now level 1!");
});
