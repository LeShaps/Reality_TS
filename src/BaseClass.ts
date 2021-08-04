import { ArgsOf, Client, Command, CommandMessage, CommandNotFound, Discord, On  } from "@typeit/discord";
import { error } from "console";
import { channel } from "diagnostics_channel";
import { GuildChannel, GuildMember, MessageEmbed, MessageMentions, User } from "discord.js";
import { compileFunction } from "vm";
import { WebScrapper } from "./Scrapper";

interface FindArgs {
    name: string;
    number: number;
}

@Discord("rl.")
abstract class RealityApp {
    @On("message")
    onMessage(
        [message]: ArgsOf<"message">,
        client: Client
    ) {
        if (message.author.bot) return;
    }

    @Command("hello")
    private hello(message: CommandMessage) {
        message.channel.send("Hello, I've received this command as intended!");
    }

    @Command("find :name :number")
    private find(message: CommandMessage<FindArgs>) {
        const { name, number } = message.args;

        message.channel.send("Find a name of " + name + " (Instance " + number + ")");
    }

    @Command("add role to")
    private add_role(message: CommandMessage) {
        let Member: GuildMember;
        const testRole = message.guild.roles.cache.get('871821621470564353');

        if (message.mentions.members.size < 1) return;
        Member = message.mentions.members.first();

        if (Member === undefined) return;
        Member.roles.add(testRole);
        message.channel.send("Role should be updated");
    }

    @Command("test scrapping")
    private async create_channel_test(message: CommandMessage) {
        let WScrapper: WebScrapper = new WebScrapper();
        let pageResult = await WScrapper.TryingScrape();

        console.log(pageResult);
        message.channel.send(JSON.stringify(pageResult));
    }

    @Command("try embed")
    private embedtype(message: CommandMessage) {
        let TestEmbed: Partial<MessageEmbed> = {
            title: "Episode",
            description: "You can have some informations about an episode here",
            color: 890,
            fields: [
                {
                    name: "Lenght per episode",
                    value: "20 mins",
                    inline: false
                },
                {
                    name: "Episode number",
                    value: "10/12",
                    inline: false
                }
            ]
        };

        message.channel.send( { embed: TestEmbed } );
    }

    @CommandNotFound()
    private notFound(message: CommandMessage) {
        message.channel.send("If this is a command, I haven't understood it");
    }
}