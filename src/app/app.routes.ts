import { Routes } from '@angular/router';


export const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: () => import('./presentation/auth/auth.routes').then(m => m.AuthRoutes) 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./presentation/home/home.routes').then(m => m.HomeRoutes) 
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { 
    path: '**',
    redirectTo: 'auth' 
  },
];