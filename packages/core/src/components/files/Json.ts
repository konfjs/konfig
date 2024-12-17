import * as fs from 'node:fs';

export class JsonFile {
    constructor(
        /**
         * File name without `.json` extension.
         */
        readonly name: string,
        readonly content: any,
    ) {}

    save() {
        try {
            fs.writeFileSync(`${this.name}.json`, JSON.stringify(this.content, null, 2));
        } catch (error) {
            console.error(`Error saving file ${this.name}.json: ${error}`);
        }
    }
}
