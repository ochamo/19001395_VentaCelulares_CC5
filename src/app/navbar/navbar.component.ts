import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../shared/service/token/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.tokenService.isLoggedIn();
  }

  logOut(): void {
    this.tokenService.clear();
    this.router.navigate(['/login']);
  }
}
