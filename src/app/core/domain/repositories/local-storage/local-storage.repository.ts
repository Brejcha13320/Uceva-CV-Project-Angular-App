export abstract class LocalStorageRepository {
    abstract get(key: string): string | null;
    abstract set(key: string, value: string): void;
    abstract remove(key: string): void
}