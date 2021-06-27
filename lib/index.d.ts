import { Stream } from "stream";

export interface CacheOptions {
    max?: number,
    maxEntries?: number | null,
    maxAge?: number | undefined,
    onError?: (err: Error) => void,
}

export default class DiskCache<K, V> {

    constructor(rootPath: string, options?: CacheOptions);

    init(): void;

    reset(): void;

    has(key: string): boolean;

    get(key: K, opts: {encoding?: string}): V;

    // Returns size
    set(key: K, dataOrSteam: V & Stream): Promise<number>;

    del(key: K): void;

    size(): number;

    prune(): void;
}