import { UbmlElement } from "./element";

export class Rule extends UbmlElement {

    constructor() {
        super('');
    }

    parse(): string {
        return this.ubml.trim();
    }
}