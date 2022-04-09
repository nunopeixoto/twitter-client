import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { TweetRoutingModule } from './tweet-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TweetService } from './services/tweet.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TweetRoutingModule,
    SharedModule
  ],
  providers: [
    TweetService
  ]
})
export class TweetModule { }
