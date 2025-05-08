import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const withTokenGuard: CanActivateFn = (route, state) => {
  let authSer = inject(AuthService);
  if (authSer.isLoggedIn) return true;
  return false;
};
