import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Tweet } from '../../models/tweet.model';
import { UserFollower } from '../../models/user-followermodel';
import { User } from '../../models/user.model';
import {FeedService} from '../../services/feed.service';
import {FollowService} from '../../services/follow.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  userAuthed!: User
  tweets: Tweet[] = [];
  constructor(
    private authService: AuthService,
    private feedService: FeedService,
    private followService: FollowService
  ) {
    this.authService.getLoggedInUser().subscribe((user: User) => {
      this.userAuthed = user;
    });
  }

  ngOnInit(): void {
    this.feedService.getFeed().subscribe((data) => {
      this.tweets = data;
    });
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


  canFollow(user: User) : boolean {
    for (let i = 0; i < user.followers.length; i++) {
      let userFollower:UserFollower = user.followers[i];
      if (userFollower.user_following_id === this.userAuthed.id) {
        return false;
      }
    }
    return true;
  }
}
