import { Comment } from './elements/comment';
import { UbmlElement } from './elements/element';
import { Heading } from './elements/heading';
import { Text } from './elements/text';
import { Markdown } from './elements/markdown';
import { Image } from './elements/image';
import { Video } from './elements/video';
import { Audio } from './elements/audio';
import { Embed } from './elements/embed';
import { Path } from './elements/path';
import { Title } from './elements/title';
import { Description } from './elements/description';
import { Rule } from './elements/rule';
import { Quote } from './elements/quote';
import { Code } from './elements/code';

import { Markdown as MarkdownTranspiler } from './transpilers/markdown';

// http://www.unicode.org/reports/tr18/#Line_Boundaries
const ELEMENT_REGEX = /^\=|([\n\r\v\f\x85\u2028\u2029])\=/;

interface UBMLToken {
    element: string;
    params: string[];
    data: string;
}

export class Ubml {

    protected ubml: string;

    constructor(ubml: string) {
        this.ubml = ubml;
    }

    parse(ubml?: string): UbmlElement[] {
        return this.tokenize(ubml ?? this.ubml).map((token) => this.parseToken(token));
    }

    toMarkdown(ubml?: string): string {
        const transpiler = new MarkdownTranspiler(this.parse(ubml));
        return transpiler.build();
    }

    private tokenize(ubml: string): UBMLToken[] {

        const tokens: UBMLToken[] = [];
        const parts = ubml.split(ELEMENT_REGEX).filter(Boolean).filter((i) => i !== "\n");

        for (let i = 0; i < parts.length; i++) {

            const token = parts[i].split(/(?<=^\S+)\s/);
            const params = token[0].trim().split(':');
            const data = token[1].trim();
            const element = params.shift();

            if (!element) throw Error('No element found.');

            tokens.push({ element, params, data });
        }

        return tokens;
    }

    private parseToken(token: UBMLToken): UbmlElement {

        switch (token.element.toLowerCase()) {
            case "path": return new Path(token.data);
            case "title": return new Title(token.data);
            case "description": return new Description(token.data);
            case "//": return new Comment(token.data);
            case "h1": return new Heading(token.data, 1);
            case "h2": return new Heading(token.data, 2);
            case "h3": return new Heading(token.data, 3);
            case "h4": return new Heading(token.data, 4);
            case "h5": return new Heading(token.data, 5);
            case "text": return new Text(token.data);
            case "markdown": return new Markdown(token.data);
            case "image": return new Image(token.data);
            case "video": return new Video(token.data);
            case "audio": return new Audio(token.data);
            case "embed": return new Embed(token.data);
            case "embed:text": return new Embed(token.data, 'text');
            case "quote": return new Quote(token.data);
            case "code": return new Code(token.data, token.params[0]);
            case "rule": return new Rule();
            default: throw Error('"' + token.element + '" is not a supported element.');
        }
    }
}