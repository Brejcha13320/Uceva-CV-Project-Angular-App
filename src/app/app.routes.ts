import { Routes } from '@angular/router';
import { authGuard } from './presentation/guards/auth-guard';
import { homeGuard } from './presentation/guards/home-guard';


export const routes: Routes = [
  { 
    path: 'auth', 
    canActivate: [authGuard],
    loadChildren: () => import('./presentation/auth/auth.routes').then(m => m.AuthRoutes) 
  },
  { 
    path: 'home', 
    canActivate: [homeGuard],
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