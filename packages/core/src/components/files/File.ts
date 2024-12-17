import * as fs from 'node:fs';
import * as path from 'node:path';

export abstract class File {
    abstract readonly path: string;

    save(): void {
        fs.writeFileSync(this.path, this.content, { encoding: 'utf-8' });
    }

    abstract content(): string;
}
