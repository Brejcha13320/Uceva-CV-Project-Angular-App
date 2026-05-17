import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { ValidateAuthUseCase } from '../../core/application/usecases/validate-auth.usecase';
import { map } from 'rxjs';

export const homeGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
    const validateAuthUseCase = inject(ValidateAuthUseCase);
  
    const token = authService.getToken();
  
    //No tiene token si puede estar en auth
    if(!token) return true
  
    //Si tiene token toca validarlo
    return validateAuthUseCase.execute(token).pipe(
      map( ({ authorization, user }) => {
        //Token Valido puedes aqui dentro del home
        if(authorization){
          console.log('[Token Valid] Puede estar aqui');
          authService.setUser(user);
          return true;
        } else {
          console.log('[Token Not Valid] No Puede estar aqui');
          authService.logout();
          return false;
        }
      })
    );
};
