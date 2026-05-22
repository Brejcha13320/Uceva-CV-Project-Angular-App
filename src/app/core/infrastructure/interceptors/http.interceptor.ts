import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { LoadingService } from '../../../shared/services/loading/loading.service';
import { delay, finalize } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const loadingService = inject(LoadingService);

  const apiUrl = `${environment.apiUrl}/api`;
  const token = authService.getToken();

  // URLs que NO necesitan token
  const excludedUrls = [
    '/auth/login',
    '/auth/register',
    '/auth/validate'
  ];

  const isExcluded = excludedUrls.some(url =>
    req.url.includes(url)
  );

  // Configuración base
  let headers = req.headers;

  // Agregar token solo si existe y no está excluida
  if (token && !isExcluded) {
    headers = headers.set(
      'Authorization',
      `Bearer ${token}`
    );
  }

  const cloneReq = req.clone({
    url: `${apiUrl}${req.url}`,
    headers,
  });

  // Mostrar spinner
  loadingService.show();

  return next(cloneReq).pipe(
    delay(500),
    finalize(() => {
      // Ocultar spinner
      loadingService.hide();
    })
  );
};