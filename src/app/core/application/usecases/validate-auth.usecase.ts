import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRepository } from "../../domain/repositories/user.repository";
import { ValidateAuth } from "../../domain/models/user.model";

@Injectable({ providedIn: 'root' })
export class ValidateAuthUseCase {
    private userRepository = inject(UserRepository);

    execute(token: string): Observable<ValidateAuth>{
        return this.userRepository.validate(token);
    }
}