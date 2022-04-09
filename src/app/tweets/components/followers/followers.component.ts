import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FollowersService } from '../../services/followers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  loaded: boolean = false;
  followers: User[] = [];
  constructor(
    private followersService: FollowersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.followersService.getFollowers().subscribe((data: User[]) => {
      this.loaded = true;
      this.followers = data;
    });
  }

  goToUserProfile(user: User): void {
    this.router.navigate(['./profile/' + user.id]);
  }
}
