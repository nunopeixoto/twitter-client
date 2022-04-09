import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import {TweetService} from '../../services/tweet.service';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.scss']
})
export class CreateTweetComponent {

  private cleanTweet: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private tweetService: TweetService
  ) {}

  createTweetForm = this.formBuilder.group({
    text: new FormControl('', [Validators.required]),
  });

  createTweet(): void {
    console.log('create tweet. clean tweet?');
    console.log(this.cleanTweet)
    if (!this.createTweetForm.valid) {
      return;
    }

    if (this.cleanTweet) {
      this.tweetService.createTweetClean(this.createTweetForm.value.text).subscribe((data: any) => {
        this.createTweetForm.reset();
        this.createTweetForm.controls['text'].setErrors(null);
      });
      return;
    }

    this.tweetService.createTweet(this.createTweetForm.value.text).subscribe((data: any) => {
      this.createTweetForm.reset();
      this.createTweetForm.controls['text'].setErrors(null);
    });
  }

  toggle() : void {
    this.cleanTweet = !this.cleanTweet;
  }
}
