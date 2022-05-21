import { FETCH_SUPPLIERS } from '../keys'

const initialState = {
  suppliers: []
}

export default function purchaseReducers (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case FETCH_SUPPLIERS:
      return {
        ...state,
        suppliers: payload
      }
    default:
      return state
  }
}
