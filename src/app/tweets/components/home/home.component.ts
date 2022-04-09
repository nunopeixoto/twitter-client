import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private formBuilder: FormBuilder,
    private tweetService: TweetService
  ) {}

  createTweetForm = this.formBuilder.group({
    text: new FormControl('', [Validators.required]),
  });

  createTweet(): void {
    console.log('create tweet')
    if (this.createTweetForm.valid) {
      this.tweetService.createTweet(this.createTweetForm.value.text).subscribe((data: any) => {
        this.createTweetForm.reset();
        this.createTweetForm.controls['text'].setErrors(null);
      });
    }
  }
}
