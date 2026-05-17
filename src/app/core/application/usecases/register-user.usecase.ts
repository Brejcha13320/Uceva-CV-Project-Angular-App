import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateUserData, User } from "../../domain/models/user.model";
import { UserRepository } from "../../domain/repositories/user.repository";

@Injectable()
export class RegisterUserUseCase {
    private userRepository = inject(UserRepository);

    execute(createUserData: CreateUserData): Observable<User>{
        return this.userRepository.create(createUserData);
    }
}