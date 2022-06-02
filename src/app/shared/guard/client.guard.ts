import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "../service/token/token.service";

@Injectable({
    providedIn: 'root'
})
export class ClientGuard implements CanActivate {
    
    constructor(
        private tokenService: TokenService,
        private router: Router
    ) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let role = this.tokenService.getRole();
        if (role == 2) {
            return true;
        } else {
            this.router.navigate(['/notAuthorized']);
            return false;
        }

    }
}