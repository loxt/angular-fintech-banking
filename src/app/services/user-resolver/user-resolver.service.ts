import { Injectable } from '@angular/core';
import {
  ResolveData,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })
export class UserResolverService implements Resolve<any> {
  constructor(private user: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<never> | any {
    return this.user.getUser();
  }
}
