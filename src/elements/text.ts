import { UbmlElement } from "./element";

export class Text implements UbmlElement {
    
    raw: string;

    constructor(raw: string) {
        this.raw = raw.trim();
    }

    parse(): string {
        return this.raw;
    }
}