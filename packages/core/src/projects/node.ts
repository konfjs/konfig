import { IgnoreFile } from '../components/IgnoreFile.js';
import { NpmConfig } from '../components/NpmConfig.js';
import { PackageJson } from '../components/PackageJson.js';

export class NodeProject {
    readonly packageJson: PackageJson;
    readonly npmIgnore?: IgnoreFile;
    readonly npmrc?: NpmConfig;
    readonly dependencies: string[] = [];
    readonly devDependencies: string[] = [];
    constructor() {}
}
