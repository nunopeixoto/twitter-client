import {UserFollower} from './user-followermodel';
export class User {
  id: number;
  name: string;
  email: string;
  type: number|null;
  followers: UserFollower[];

  constructor(user: any) {
    this.id = Number(user.id);
    this.name = user.name;
    this.email = user.email;
    this.type = user.type ? Number(user.type) : null;
    this.followers = user.followers;
  }
}
