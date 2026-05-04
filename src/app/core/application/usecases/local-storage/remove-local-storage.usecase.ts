import { inject } from "@angular/core";
import { LocalStorageRepository } from "../../../domain/repositories/local-storage/local-storage.repository";

export class RemoveLocalStorageUseCase {
    private localStorageRepository = inject(LocalStorageRepository);
    execute(key: string): void {
        this.localStorageRepository.remove(key);
    }
}