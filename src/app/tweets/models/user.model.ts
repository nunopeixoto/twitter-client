export class User {
  id: number;
  name: string;
  email: string;

  constructor(user: any) {
      this.id = Number(user.id);
      this.name = user.name;
      this.email = user.email;
  }
}
