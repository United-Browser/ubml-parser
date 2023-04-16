import { UbmlElement } from "./element";
import md, { Node } from 'markdown-ast'

export class Markdown extends UbmlElement {

    parse(): Node[] {
        return md(this.ubml.trim());
    }
}