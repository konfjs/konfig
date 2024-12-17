import * as fs from 'node:fs';
import * as yaml from 'yaml';

export class YamlFile {
    constructor(
        /**
         * File name without `.json` extension.
         */
        readonly name: string,
        readonly content: any,
    ) {}

    save() {
        try {
            fs.writeFileSync(`${this.name}.yaml`, yaml.stringify(this.content));
        } catch (error) {
            console.error(`Error saving file ${this.name}.yaml: ${error}`);
        }
    }
}
