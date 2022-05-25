import { FETCH_SUPPLIER, FETCH_SUPPLIERS, FETCH_TOP_ITEMS } from '../keys'

const initialState = {
  suppliers: [],
  supplier: {},
  items: []
}

export default function purchaseReducers (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case FETCH_SUPPLIERS:
      return {
        ...state,
        suppliers: payload
      }

    case FETCH_SUPPLIER:
      return {
        ...state,
        supplier: payload
      }
    case FETCH_TOP_ITEMS:
      return {
        ...state,
        items: payload
      }
    default:
      return state
  }
}
