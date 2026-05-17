
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginUser, LoginUserData } from "../../domain/models/user.model";
import { UserRepository } from "../../domain/repositories/user.repository";

@Injectable()
export class LoginUserUseCase {
    private userRepository = inject(UserRepository);

    execute(loginUserData: LoginUserData): Observable<LoginUser>{
        return this.userRepository.login(loginUserData);
    }
}