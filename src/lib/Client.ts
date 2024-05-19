import { Client } from "discord.js";

export class ExtendedClient extends Client {
  public constructor() {
    super({
      intents: ["GuildMessages", "Guilds", "MessageContent"],
    });
  }
}
