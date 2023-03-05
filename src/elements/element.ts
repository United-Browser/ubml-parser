export interface UbmlElement {
    parse: () => Object
}

const LINE_REGEX = /\s*(?:\r\n|[\n\r\v\f\x85\u2028\u2029])+/

export const Util = {
    splitLines: (text: string) => text.split(LINE_REGEX).filter(Boolean)
}