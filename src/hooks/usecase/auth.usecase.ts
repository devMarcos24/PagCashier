export interface IUser {
  avatar?: string;
}

export interface AuthState {
  token: string;
  user: object;
}

export interface SignInCredentials {
  name?: string;
  email: string;
  password: string;
  loginWithId?: boolean;
}

export interface AuthContextData {
  user: any;
  token: string;
  isLoading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  SignUp(credentials: SignInCredentials): Promise<string>
  signOut(): Promise<void>;
  forgotPassword(email: string): Promise<void>;
}