import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationSerivice: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationSerivice.currentUserValue;
        if(currentUser) {
            // authed in
            return true;
        }
        // else
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}