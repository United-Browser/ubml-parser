import { MediaElement, UbmlElement } from "./element";

export class Image extends UbmlElement {

    parseLine(line: string) : MediaElement {
        const parts: string[] = line.split(/(?<=^\S+)\s/);
        return {
            source: parts[0],
            caption: parts[1] ?? ''
        }
    }

    parse(): MediaElement[] {
        return this.splitLines(this.ubml.trim()).map(this.parseLine);
    }
}