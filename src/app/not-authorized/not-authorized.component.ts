import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';
import { TokenService } from '../shared/service/token/token.service';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.scss']
})
export class NotAuthorizedComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/anim/79206_http_401_unauthorized_client_error.json'
  };

  constructor(
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  animationCreaetd(animationItem: AnimationItem) {
    console.log(`animation ${animationItem}`);
  }

  loggedIn(): boolean {
    return this.tokenService.isLoggedIn();
  }

  logOut(): void {
    this.tokenService.clear();
    this.router.navigate(['/login']);
  }


}
