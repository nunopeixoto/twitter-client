import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User } from '../../models/user.model';
import { ProfileService } from '../../services/profile.service';
import {UserFollower} from '../../models/user-followermodel';
import { AuthService } from 'src/app/auth/auth.service';
import { FollowService } from '../../services/follow.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: User;

  userAuthed!: User;

  loaded: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
    private authService: AuthService,
    private followService: FollowService
  ) {
    this.authService.getLoggedInUser().subscribe((user: User) => {
      this.userAuthed = user;
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['./home']);
    }

    this.profileService.getProfile(Number(id)).subscribe((user: User) => {
      this.user = user;
      this.loaded = true;
    });
  }

  canFollow(user: User) : boolean {
    for (let i = 0; i < user.followers.length; i++) {
      let userFollower:UserFollower = user.followers[i];
      if (userFollower.user_following_id === this.userAuthed.id) {
        return false;
      }
    }
    return true;
  }

  follow(user: User) : void {
    this.followService.follow(user).subscribe(() => {
      user.followers = [{
        user_following_id: this.userAuthed.id,
        user_id: user.id
      }]
    });
  }

  unfollow(user: User) : void {
    this.followService.unfollow(user).subscribe(() => {
      user.followers = [];
    });
  }


}
