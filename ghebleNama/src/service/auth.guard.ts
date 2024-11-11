import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const strValue=localStorage.getItem('isLogin');
  if (strValue=='ok') {
    return true;
  }
  return false;
};
