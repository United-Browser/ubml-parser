import { UbmlElement } from "./element";

export class List extends UbmlElement {

    parse(): string {
        return this.ubml.trim();
    }
}