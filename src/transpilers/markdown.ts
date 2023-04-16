import { Code } from "../elements/code";
import { List } from "../elements/list";
import { Quote } from "../elements/quote";
import { Text } from "../elements/text";
import { Transpiler } from "./transpiler";
import { Markdown as MarkdownElement } from "../elements/markdown";
import { Image } from "../elements/image";
import { Heading } from "../elements/heading";
import { Audio } from "../elements/audio";
import { Comment } from "../elements/comment";
import { Description } from "../elements/description";
import { Embed } from "../elements/embed";
import { Title } from "../elements/title";
import { Video } from "../elements/video";

export class Markdown extends Transpiler {
    
    title(content: Title): string {
        return `# ${content.parse()}\n\n`;
    }
    
    description(content: Description): string {
        return `${content.parse()}\n\n`;
    }
    
    comment(content: Comment): string {
        return `<!--${content.parse()}-->\n\n`;
    }

    heading(content: Heading): string {
        // create a string of hashes equal to the heading level
        const hashes = '#'.repeat(content.parse().level);
        return `${hashes} ${content.parse().text}\n\n`;
    }

    text(content: Text): string {
        return `${content.parse()
            .split("\n")
            .map((i) => i + "\n")
            .join("\n")
        }\n\n`;
    }

    list(content: List): string {
        return `${content.parse()}\n\n`;
    }

    quote(content: Quote): string {
        const lines = content.parse().split('\n');
        const quotedLines = lines.map((line) => `> ${line}`).join('\n');
        return `${quotedLines}\n\n`;
    }

    rule(): string {
        return '---\n\n';
    }

    markdown(content: MarkdownElement): string {
        return `${content.ubml}\n\n`;
    }

    code(code: Code): string {
        const langTag = code.language() ? `${code.language()}\n` : '';
        return '```' + langTag + code.parse() + '\n```\n\n';
    }

    image(image: Image): string {
        return this.media(image);
    }

    audio(audio: Audio): string {
        return this.media(audio);
    }
    video(video: Video): string {
        return this.media(video);
    }

    embed(embed: Embed): string {
        let items: string = '';
        for(let item of embed.parse()) {
            if(item.source) {
                items += `![${item.source}](${item.source})\n\n`;
            }
        }
        return items;
    }
    

    private media(media: Image | Audio | Video): string {
        let items: string = '';
        for(let item of media.parse()) {
            if(item.source) {
                items += `![${item.caption}](${item.source})\n\n`;
            }
        }
        return items;
    }


}