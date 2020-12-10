import { createStore } from 'redux'

import rootReducer from './ducks'

export type Store = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store
