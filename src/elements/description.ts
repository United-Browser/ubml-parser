import { UbmlElement } from "./element";

export class Description extends UbmlElement {

    parse(): string {
        return this.ubml.trim();
    }
}