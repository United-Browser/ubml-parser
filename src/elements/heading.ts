import { UbmlElement } from "./element";

export class Heading extends UbmlElement {

    parse() {
        return {
            level: this.params[0],
            type: `h${this.params[0]}`,
            text: this.ubml
        }
    }
}