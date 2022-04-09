import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { TweetRoutingModule } from './tweet-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TweetService } from './services/tweet.service';
import { CreateTweetComponent } from './components/create-tweet/create-tweet.component';
import { FeedComponent } from './components/feed/feed.component';
import {FeedService} from './services/feed.service';
import { FollowersComponent } from './components/followers/followers.component';
import {FollowService} from './services/follow.service';
import {FollowersService} from './services/followers.service';
import { FakeTweetComponent } from './components/fake-tweet/fake-tweet.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { FollowingFeedComponent } from './components/following-feed/following-feed.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateTweetComponent,
    FeedComponent,
    FollowersComponent,
    FakeTweetComponent,
    ProfileComponent,
    FollowingFeedComponent
  ],
  imports: [
    CommonModule,
    TweetRoutingModule,
    SharedModule
  ],
  providers: [
    TweetService,
    FeedService,
    FollowService,
    FollowersService,
    ProfileService
  ]
})
export class TweetModule { }
