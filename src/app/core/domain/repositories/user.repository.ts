import { Observable } from "rxjs";
import { CreateUserData, LoginUser, LoginUserData, User, ValidateAuth } from "../models/user.model";

export abstract class UserRepository {
  abstract create(createUserData: CreateUserData): Observable<User>;
  abstract login(loginUserData: LoginUserData): Observable<LoginUser>;
  abstract validate(token: string): Observable<ValidateAuth>;
  abstract getAll(): Observable<User[]>;
  abstract getById(idUser: string): Observable<User>;
}