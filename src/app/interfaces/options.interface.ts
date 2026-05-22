export interface UserOptions {
    idUser: string;
    idButton: UserOptionsButton
}

export type UserOptionsButton = 'view' | 'edit';