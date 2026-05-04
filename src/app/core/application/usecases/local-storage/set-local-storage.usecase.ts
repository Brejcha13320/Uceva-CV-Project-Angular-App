import { inject } from "@angular/core";
import { LocalStorageRepository } from "../../../domain/repositories/local-storage/local-storage.repository";

export class SetLocalStorageUseCase {
    private localStorageRepository = inject(LocalStorageRepository);
    execute(key: string, value: string): void {
        this.localStorageRepository.set(key, value);
    }
}