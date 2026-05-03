import { Routes } from "@angular/router";

export const AuthRoutes: Routes = [
    { 
        path: 'login', 
        loadComponent: () => import('./pages/login/login').then(m => m.Login) 
    },
    { 
        path: 'register', 
        loadComponent: () => import('./pages/register/register').then(m => m.Register) 
    },
    { 
        path: 'recover-password', 
        loadComponent: () => import('./pages/recover-password/recover-password').then(m => m.RecoverPassword) 
    },
    { 
        path: '**', 
        redirectTo: 'login' 
    },
]