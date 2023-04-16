import { UbmlElement } from "./element";

export class Text extends UbmlElement {

    parse(): string {
        return this.ubml.trim();
    }
}