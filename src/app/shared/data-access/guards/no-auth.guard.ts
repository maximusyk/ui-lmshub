import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { storage } from '@shared/utils/storage/storage.utils';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanLoad {
  constructor(private _router: Router) {}

  canLoad(): boolean {
    const isAuthorized = !!storage.getItem('App/accessToken');
    if (isAuthorized) {
      this._router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}
