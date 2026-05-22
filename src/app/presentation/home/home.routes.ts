import { Routes } from "@angular/router";
import { usersGuard } from "../guards/users-guard";

export const HomeRoutes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./home').then(m => m.Home),
        children: [
            { path: 'my-cv', loadComponent: () => import('./pages/my-cv/my-cv').then(m => m.MyCv) },
            { path: 'view-cvs', loadComponent: () => import('./pages/view-cvs/view-cvs').then(m => m.ViewCvs) },
            { path: 'view-cv/:email', loadComponent: () => import('./pages/view-cv/view-cv').then(m => m.ViewCv) },
            
            {
                path: 'users',
                canActivate: [usersGuard],
                children: [
                    { path: '', loadComponent: () => import('./pages/users/users').then(m => m.Users) },
                    { path: ':id', loadComponent: () => import('./pages/view-user/view-user').then(m => m.ViewUser) }
                ]
            },
            
            { path: '**', redirectTo: 'view-cvs'},
        ]
    },
    { 
        path: '**', 
        redirectTo: '' 
    },
]