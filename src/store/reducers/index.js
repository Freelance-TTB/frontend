import { combineReducers } from 'redux'
import purchaseReducers from './purchase'
const reducers = combineReducers({
  purchaseState: purchaseReducers
})

export default reducers
