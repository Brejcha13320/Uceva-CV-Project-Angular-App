export type UserRole = "ESTUDIANTE" | "DOCENTE" | "ADMIN";

export enum UserRoleEnum {
  ESTUDIANTE = "ESTUDIANTE",
  DOCENTE = "DOCENTE",
  ADMIN = "ADMIN",
}

export type CreateUserData = Omit<User, "id">;

export interface LoginUserData {
    email: string;
    password: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}

export interface LoginUser {
    user: User;
    token: string;
}

export interface ValidateAuth {
    authorization: boolean;
    user: User;
}