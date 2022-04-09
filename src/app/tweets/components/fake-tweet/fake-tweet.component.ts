import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import {TweetService} from '../../services/tweet.service';

@Component({
  selector: 'app-fake-tweet',
  templateUrl: './fake-tweet.component.html',
  styleUrls: ['./fake-tweet.component.scss']
})
export class FakeTweetComponent {

  constructor(
    private formBuilder: FormBuilder,
    private tweetService: TweetService
  ) {}

  createFakeTweetForm = this.formBuilder.group({
    text: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
  });

  createFakeTweet(): void {
    if (!this.createFakeTweetForm.valid) {
      return;
    }

    const values = this.createFakeTweetForm.value;
    this.tweetService.createFakeTweet(values.text, values.username).subscribe((data: any) => {
      this.createFakeTweetForm.reset();
      this.createFakeTweetForm.controls['text'].setErrors(null);
      this.createFakeTweetForm.controls['username'].setErrors(null);
    });
  }
}
