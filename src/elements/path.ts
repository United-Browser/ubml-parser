import { UbmlElement } from "./element";

export class Path extends UbmlElement {

    parse(): string {
        return this.ubml.trim();
    }
}