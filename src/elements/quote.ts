import { UbmlElement } from "./element";

export class Quote extends UbmlElement {

    parse(): string {
        return this.ubml.trim();
    }
}