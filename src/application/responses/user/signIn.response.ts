export class SignInResponse {
  readonly _refreshToken: string;
  readonly _accessToken: string;

  constructor(accessToken: string, refreshToken: string) {
    this._accessToken = accessToken;
    this._refreshToken = refreshToken;
  }
}