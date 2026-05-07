import { Routes } from "@angular/router";

export const HomeRoutes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./home').then(m => m.Home),
        children: [
            { path: 'my-cv', loadComponent: () => import('./pages/my-cv/my-cv').then(m => m.MyCv) },
            { path: 'view-cvs', loadComponent: () => import('./pages/view-cvs/view-cvs').then(m => m.ViewCvs) },
            { path: 'view-cv/:email', loadComponent: () => import('./pages/view-cv/view-cv').then(m => m.ViewCv) },
            { path: '**', redirectTo: 'view-cvs'},
        ]
    },
    { 
        path: '**', 
        redirectTo: '' 
    },
]