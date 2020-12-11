import { UserTypes } from './types'

export function getToken (token: string) {
  return {
    type: UserTypes.GET_TOKEN,
    payload: token
  }
}

export function resetToken () {
  return { type: UserTypes.RESET_TOKEN }
}