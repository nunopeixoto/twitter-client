import {UserFollower} from './user-followermodel';
export class User {
  id: number;
  name: string;
  email: string;
  followers: UserFollower[];

  constructor(user: any) {
    this.id = Number(user.id);
    this.name = user.name;
    this.email = user.email;
    this.followers = user.followers;
  }
}
