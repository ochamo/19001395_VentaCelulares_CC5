import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.scss']
})
export class NotAuthorizedComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/anim/79206_http_401_unauthorized_client_error.json'
  };

  constructor() { }

  ngOnInit(): void {
  }

  animationCreaetd(animationItem: AnimationItem) {
    console.log(`animation ${animationItem}`);
  }


}
