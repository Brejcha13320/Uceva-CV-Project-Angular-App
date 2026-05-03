import { Routes } from "@angular/router";

export const HomeRoutes: Routes = [
    { 
        path: '', 
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) 
    },
    { 
        path: '**', 
        redirectTo: '' 
    },
]