import { UbmlElement } from "./element";

export class Comment implements UbmlElement {
    
    raw: string;

    constructor(raw: string) {
        this.raw = raw.trim();
    }

    parse() {
        return this.raw;
    }
}