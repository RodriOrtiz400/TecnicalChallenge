export class User {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public imgUrl!: string;

  constructor(id: number, firstName: string, lastName: string, imgUrl: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imgUrl = imgUrl;
  }
}
