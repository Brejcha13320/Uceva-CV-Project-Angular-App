
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../domain/models/user.model";
import { UserRepository } from "../../domain/repositories/user.repository";

@Injectable()
export class GetAllUsersUseCase {
    private userRepository = inject(UserRepository);

    execute(): Observable<User[]>{
        return this.userRepository.getAll();
    }
}