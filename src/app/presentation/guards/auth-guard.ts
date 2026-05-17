import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { ValidateAuthUseCase } from '../../core/application/usecases/validate-auth.usecase';
import { AuthService } from '../../shared/services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const validateAuthUseCase = inject(ValidateAuthUseCase);

  const token = authService.getToken();

  //No tiene token si puede estar en auth
  if(!token) return true

  //Si tiene token toca validarlo
  return validateAuthUseCase.execute(token).pipe(
    map( ({ authorization, user }) => {
      //Token Valido no puede estar en el auth se va pal home
      if(authorization){
        console.log('[Token Valid] No puede estar en el auth');
        authService.login({ user, token });
        return false;
      } else {
        console.log('[Token Not Valid] Puede estar en el auth');
        authService.logout();
        return true
      }
    })
  );
};
