import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { inject } from '@angular/core';
import { UserRole, UserRoleEnum } from '../../core/domain/models/user.model';

export const usersGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const userRole = authService.user()?.role;

  if(userRole === UserRoleEnum.ADMIN){
    console.log('[Valid Role] Puede estar aqui');
    return true;
  } else {
    router.navigateByUrl("/home");
    console.log('[Invalid Role] No Puede estar aqui');
    return false;
  }
};
