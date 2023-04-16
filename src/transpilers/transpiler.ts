import { Audio } from "../elements/audio";
import { Code } from "../elements/code";
import { Comment } from "../elements/comment";
import { Description } from "../elements/description";
import { UbmlElement } from "../elements/element";
import { Embed } from "../elements/embed";
import { Heading } from "../elements/heading";
import { Image } from "../elements/image";
import { List } from "../elements/list";
import { Markdown } from "../elements/markdown";
import { Quote } from "../elements/quote";
import { Text } from "../elements/text";
import { Title } from "../elements/title";
import { Video } from "../elements/video";

export abstract class Transpiler {

    protected elements;

    constructor(elements: UbmlElement[]) {
        this.elements = elements;
    }

    build(): string {
        
        let content = '';

        for (let element of this.elements) {

            switch (element.constructor.name) {
                case 'Title': content += this.title(element as Title); break;
                case 'Description': content += this.description(element as Description); break;
                case 'Heading': content += this.heading(element as Heading); break;
                case 'Text': content += this.text(element as Text); break;
                case 'List': content += this.list(element as List); break;
                case 'Quote': content += this.quote(element as Quote); break;
                case 'Rule': content += this.rule(); break;
                case 'Markdown': content += this.markdown(element as Markdown); break;
                case 'Code': content += this.code(element as Code); break;
                case 'Image': content += this.image(element as Image); break;
                case 'Video': content += this.video(element as Video); break;
                case 'Audio': content += this.audio(element as Audio); break;
                case 'Embed': content += this.embed(element as Embed); break;
                case 'Comment': content += this.comment(element as Comment); break;
            }
        }

        return content;
    }

    abstract title(content: Title): string;

    abstract description(content: Description): string;

    abstract heading(content: Heading): string;

    abstract text(content: Text): string;

    abstract list(content: List): string;

    abstract quote(content: Quote): string;

    abstract rule(): string;

    abstract markdown(content: Markdown): string;

    abstract code(code: Code): string;

    abstract image(image: Image): string;

    abstract audio(audio: Audio): string;

    abstract video(video: Video): string;

    abstract embed(embed: Embed): string;

    abstract comment(comment: Comment): string;
}