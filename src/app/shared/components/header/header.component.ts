import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout() : void {
    this.authService.logout();
  }

  goToFollowers() : void {
    this.router.navigate(['./followers']);
  }

  goToFakeTweet() : void {
    this.router.navigate(['./fake-tweet']);
  }

  goToHome() : void {
    this.router.navigate(['./home']);
  }
}
