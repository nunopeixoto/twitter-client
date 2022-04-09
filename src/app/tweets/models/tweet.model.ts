import { User } from "./user.model";

export class Tweet {
  id: number;
  text: string;
  user: User;
  created_at: Date;
  retweeted_id: number;
  retweeted_tweet?: Tweet;

  constructor(tweet: any) {
      this.id = Number(tweet.id);
      this.text = tweet.text;
      this.user = tweet.user;
      this.created_at = new Date(tweet.created_at);
      this.retweeted_id = Number(tweet.retweeted_id);
      this.retweeted_tweet = tweet.retweeted_tweet;
  }
}
