import { Reducer } from 'redux'
import { UserData, UserTypes } from './types'

const baseUser: UserData = { token: '' }

const reducerUser: Reducer<UserData> = (state = baseUser, action) => {
  switch (action.type) {
  case UserTypes.GET_TOKEN:
    return { ...state, token: action.payload }
  case UserTypes.RESET_TOKEN:
    return { ...state, token: '' }
  default:
    return state
  }
}

export default reducerUser
