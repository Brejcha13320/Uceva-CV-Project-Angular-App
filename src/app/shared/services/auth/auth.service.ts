import { inject, Injectable, signal } from '@angular/core';
import { LoginUser, User } from '../../../core/domain/models/user.model';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private _user = signal<User | null>(null);
  user = this._user.asReadonly();

  private readonly router = inject(Router);
  private readonly localStorageService = inject(LocalStorageService);

  login({ user, token }: LoginUser){
    this.localStorageService.set('token', token);
    this.setUser(user);
    this.router.navigateByUrl("/home");
  }

  logout(){
    this.setUser(null);
    this.localStorageService.remove('token');
    this.router.navigateByUrl("/login");
  }

  setUser(user: User | null) {
    this._user.set(user);
  }

  getToken(){
    return this.localStorageService.get('token');
  }

}
