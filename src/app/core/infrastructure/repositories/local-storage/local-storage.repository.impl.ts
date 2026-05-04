import { Injectable } from "@angular/core";
import { LocalStorageRepository } from "../../../domain/repositories/local-storage/local-storage.repository";

@Injectable()
export class LocalStorageRepositoryImpl extends LocalStorageRepository {
    set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
    
    get(key: string): string | null {
        return localStorage.getItem(key);
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }
}