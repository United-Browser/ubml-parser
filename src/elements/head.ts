import { UbmlElement } from "./element";

export class Head implements UbmlElement {
    
    raw: string;
    level: number;

    constructor(raw: string, level: number) {
        this.raw = raw.trim();
        this.level = level;
    }

    parse() {
        return {
            head: this.raw,
            level: this.level
        }
    }
}