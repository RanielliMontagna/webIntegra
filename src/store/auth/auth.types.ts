export type Token = string | null;

export interface IProfile {
  id: string;
  nome: string;
}

export interface IAuthStates {
  token: Token;
  isAuthenticated: boolean;
  profile?: IProfile;
}

export interface IAuthStore extends IAuthStates {
  setToken: (token: Token) => void;
  clearStore: () => void;
}
