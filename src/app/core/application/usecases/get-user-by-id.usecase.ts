
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../domain/models/user.model";
import { UserRepository } from "../../domain/repositories/user.repository";

@Injectable()
export class GetUserByIdUseCase {
    private userRepository = inject(UserRepository);

    execute(idUser: string): Observable<User>{
        return this.userRepository.getById(idUser);    
    }
}