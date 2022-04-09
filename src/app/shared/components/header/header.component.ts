import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import {User} from '../../../tweets/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userAuthed!: User;
  userLoaded: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.getLoggedInUser().subscribe((user: User) => {
      this.userAuthed = user;
      this.userLoaded = true;
    });
  }

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

  goToFollowingFeed() : void {
    this.router.navigate(['./following-feed']);
  }
}
