import {FAIL, POST_ORDER, START, SUCCESS} from '../common'
import produce from 'immer'

const initialState = {
  loading: false,
  error: null,
  entities: {},
}

export const orderReducer = (orderState = initialState, action) =>
  produce(orderState, draft => {
    switch (action.type) {
      case POST_ORDER + START: {
        draft.loading = true
        break
      }
      case POST_ORDER + SUCCESS: {
        draft.loading = false
        draft.error = null
        draft.entities = action.response
        break
      }
      case POST_ORDER + FAIL: {
        draft.loading = false
        draft.error = action.error
        break
      }
      default:
        return
    }
  })
