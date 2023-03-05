import { UbmlElement, Util } from "./element";

export class Image implements UbmlElement {
    
    raw: string;

    constructor(raw: string) {
        this.raw = raw.trim();
    }

    parse(): string[] {
        return Util.splitLines(this.raw);
    }
}