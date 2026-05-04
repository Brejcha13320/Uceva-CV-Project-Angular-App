import { inject } from "@angular/core";
import { LocalStorageRepository } from "../../../domain/repositories/local-storage/local-storage.repository";

export class GetLocalStorageUseCase {
    private localStorageRepository = inject(LocalStorageRepository);
    execute(key: string): string | null {
        return this.localStorageRepository.get(key);
    }
}