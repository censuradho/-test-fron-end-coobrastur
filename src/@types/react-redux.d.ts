import { Store } from '../store/types'
import 'react-redux'

declare module 'react-redux' {
  export interface DefaultRootState extends Store {}
}