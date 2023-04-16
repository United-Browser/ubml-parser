import { UbmlElement } from "./element";

export class Comment extends UbmlElement {

    parse() {
        return this.ubml.trim();
    }
}