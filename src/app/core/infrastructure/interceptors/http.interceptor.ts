import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  const apiUrl = `${environment.apiUrl}/api`;

  const cloneReq = req.clone({
    url: `${apiUrl}${req.url}`
  });

  return next(cloneReq);
};