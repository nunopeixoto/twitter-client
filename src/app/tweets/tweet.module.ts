import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { TweetRoutingModule } from './tweet-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TweetService } from './services/tweet.service';
import { CreateTweetComponent } from './components/create-tweet/create-tweet.component';
import { FeedComponent } from './components/feed/feed.component';
import {FeedService} from './services/feed.service';

@NgModule({
  declarations: [
    HomeComponent,
    CreateTweetComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    TweetRoutingModule,
    SharedModule
  ],
  providers: [
    TweetService,
    FeedService
  ]
})
export class TweetModule { }
