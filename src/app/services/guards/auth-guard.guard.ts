import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardGuard implements CanActivate {
  constructor(private loginService: LoginService) {}

  canActivate(): boolean {
    return this.loginService.isAuthenticated();
  }
}
