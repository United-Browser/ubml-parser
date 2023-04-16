import { UbmlElement } from "./element";

interface EmbedElement {
    source: string;
    index: string;
    element: string;
}

export class Embed extends UbmlElement {

    parseLine(line: string): EmbedElement {
        const parts: string[] = line.split(/(?<=^\S+)\s/);
        return {
            source: parts[0],
            index: parts[1],
            element: this.params[0]
        }
    }

    parse(): EmbedElement[] {
        return this.splitLines(this.ubml.trim()).map(this.parseLine, this);
    }
}