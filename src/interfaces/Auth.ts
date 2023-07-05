export interface AuthRequestDataI {
  username: string;
  password: string;
}

export interface AuthResponseDataI {
  userId: number;
  username: string;
}

export interface LoginRequestDataI {
  username: string;
  password: string;
}

export interface LoginResponseDataI {
  message: string;
  accessToken: string;
}

export interface RegisterRequestDataI {
  username: string;
  password: string;
}

export interface RegisterRequestResponseI {
  message: string;
  accessToken: string;
}