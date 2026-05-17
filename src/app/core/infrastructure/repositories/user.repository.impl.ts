import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateUserData, LoginUser, LoginUserData, User, ValidateAuth } from "../../domain/models/user.model";
import { UserRepository } from "../../domain/repositories/user.repository";

@Injectable()
export class UserRepositoryImpl extends UserRepository {

    private readonly httpClient = inject(HttpClient)
    
    create(createUserData: CreateUserData): Observable<User> {
        return this.httpClient.post<User>('/auth/register', createUserData);
    }

    login(loginUserData: LoginUserData): Observable<LoginUser> {
        return this.httpClient.post<LoginUser>('/auth/login', loginUserData);
    }

    validate(token: string): Observable<ValidateAuth> {
        return this.httpClient.post<ValidateAuth>('/auth/validate', { token });
    }
    
}