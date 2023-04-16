import { UbmlElement } from "./element";

export class Title extends UbmlElement {

    parse(): string {
        return this.ubml.trim();
    }
}