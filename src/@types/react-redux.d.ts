import { Store } from 'src/store'
import 'react-redux'

declare module 'react-redux' {
  export interface DefaultRootState extends Store {}
}