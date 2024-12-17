import { IgnoreFile } from './File.js';

export class Project {
    readonly name: string;
    readonly gitignore?: IgnoreFile;
    constructor() {}
}
