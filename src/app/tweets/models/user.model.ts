import { Tweet } from './tweet.model';
import {UserFollower} from './user-followermodel';
export class User {
  id: number;
  name: string;
  email: string;
  type: number|null;
  followers: UserFollower[];
  tweets?: Tweet[];

  constructor(user: any) {
    this.id = Number(user.id);
    this.name = user.name;
    this.email = user.email;
    this.type = user.type ? Number(user.type) : null;
    this.followers = user.followers;
    this.tweets = user.tweets;
  }
}
