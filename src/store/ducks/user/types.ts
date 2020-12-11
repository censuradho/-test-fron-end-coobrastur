export enum UserTypes {
  'GET_TOKEN' = 'GET_TOKEN/user',
  'RESET_TOKEN' = 'RESET_TOKEN/user'
}

export interface UserData {
  token: string
}

