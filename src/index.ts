import { Comment } from './elements/comment';
import { UbmlElement } from './elements/element';
import { Head } from './elements/head';
import { Text } from './elements/text';


// http://www.unicode.org/reports/tr18/#Line_Boundaries
var ELEMENT_REGEX = /^=|\s*(?:\r\n|[\n\r\v\f\x85\u2028\u2029])+\=/

function splitElements(text: string): string[] {
    return text.split(ELEMENT_REGEX).filter(Boolean);
}

function _parseElement(raw: string): UbmlElement {
    
    const element: string[] = raw.split(/(?<=^\S+)\s/);
    
    if(!element[0]) throw Error('No element.');

    switch(element[0]) {
        case "title": return new Text(element[1]);
        case "description": return new Text(element[1]);
        case "//": return new Comment(element[1]);
        case "head1": return new Head(element[1], 1);
        case "head2": return new Head(element[1], 2);
        case "head3": return new Head(element[1], 3);
        case "head4": return new Head(element[1], 4);
        case "head5": return new Head(element[1], 5);
        case "text": return new Text(element[1]);
        case "markdown": return new Text(element[1]);
        case "image": return new Text(element[1]);
        case "video": return new Text(element[1]);
        case "audio": return new Text(element[1]);
        case "embed": return new Text(element[1]);
        case "embed:text": return new Text(element[1]);
        default: throw Error('Element '+element[0]+' does not exist.');
    }
}

function _parse(ubml: string): UbmlElement[] {
    
    if(typeof ubml !== "string") throw Error();
    let parsed = [];
    for(let element of splitElements(ubml)) {
        parsed.push(_parseElement(element));
    }
    return parsed;
}

export const Ubml = {
    parseElement: _parseElement,
    parse: _parse
};