export class UserFollower {
  user_id: number;
  user_following_id: number;

  constructor(userFollower: any) {
      this.user_id = Number(userFollower.user_id);
      this.user_following_id = Number(userFollower.user_following_id);
  }
}
