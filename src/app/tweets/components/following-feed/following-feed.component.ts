import { Component, OnInit } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';

@Component({
  selector: 'app-following-feed',
  templateUrl: './following-feed.component.html',
  styleUrls: ['./following-feed.component.scss']
})
export class FollowingFeedComponent extends FeedComponent implements OnInit {

  override ngOnInit(): void {
    this.feedService.getFollowingFeed().subscribe((data) => {
      this.tweets = data;
    });
  }

}
