import { Reducer } from 'redux'
import { UserData, UserTypes } from './types'

const baseUser: UserData = { token: '' }

const reducerUser: Reducer = (state = baseUser, action) => {
  switch (action.type) {
  case UserTypes.GET_TOKEN:
    return action.payload
  default:
    return state
  }
}

export default reducerUser
