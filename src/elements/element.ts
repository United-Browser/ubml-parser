const LINE_REGEX = /\s*(?:\r\n|[\n\r\v\f\x85\u2028\u2029])+/

export interface MediaElement {
    source: string;
    caption: string;
}

export abstract class UbmlElement {
    
    public ubml: string = '';
    public params: any[];

    constructor(ubml: string, ...params: any) {
        this.ubml = ubml;
        this.params = params;
    }

    splitLines(text: string): string[] { 
        return text.split(LINE_REGEX).filter(Boolean);
    }

    abstract parse(): any;
}