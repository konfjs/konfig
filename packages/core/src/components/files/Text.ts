import * as fs from 'node:fs';

export class TextFile {
    constructor(
        /**
         * File name includ the extension.
         */
        readonly name: string,
        readonly content: any,
    ) {}

    save() {
        try {
            fs.writeFileSync(this.name, this.content);
        } catch (error) {
            console.error(`Error saving file ${this.name}: ${error}`);
        }
    }
}
