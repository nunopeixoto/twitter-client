import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../models/tweet.model';
import {FeedService} from '../../services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  tweets: Tweet[] = [];
  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit(): void {
    this.feedService.getFeed().subscribe((data) => {
      this.tweets = data;
    });
  }

}
