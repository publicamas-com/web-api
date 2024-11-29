export class GetUserResponse {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly photoUrl: string;
  readonly createdAt: Date;

  constructor(id: string, firstName: string, lastName: string, email: string, photoUrl: string, createdAt: Date) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.photoUrl = photoUrl;
    this.createdAt = createdAt;
  }
}