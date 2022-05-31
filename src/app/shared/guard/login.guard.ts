import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "../service/token/token.service";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(
        private tokenService: TokenService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let loggedIn = this.tokenService.isLoggedIn();
        let level = this.tokenService.getRole();
        if (loggedIn) {
            this.router.navigate(['/cellphones']);
            return false;
        }
        return true;
    }

}