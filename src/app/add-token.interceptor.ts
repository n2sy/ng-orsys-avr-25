import { HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Requete originale', req);
  if (req.method == 'GET') return next(req);

  let token = localStorage.getItem('access_token');
  if (token) {
    let cloneReq = req.clone({
      setHeaders: {
        Authorization: `bearer ${token}`,
      },
    });
    console.log('Requete clonée', cloneReq);
    return next(cloneReq);
  }

  return next(req);
};
