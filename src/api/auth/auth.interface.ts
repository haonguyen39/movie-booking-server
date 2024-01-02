export interface IValidateUserParams {
  username: string;
  email: string;
  password: string;
}

export interface ITokenPayload {
  email: string;
  username: string;
}
