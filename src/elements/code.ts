import { UbmlElement } from "./element";

export class Code extends UbmlElement {

    language(): string {
        return this.params[0] ?? '';
    }

    parse(): string {
        return this.ubml.trim();
    }
}