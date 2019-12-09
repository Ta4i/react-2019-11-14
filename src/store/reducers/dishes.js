import {arrayToMap} from '../utils'
import {FAIL, FETCH_DISHES, START, SUCCESS} from '../common'
import produce from 'immer'

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
}

export const dishesReducer = (dishesState = initialState, action) =>
  produce(dishesState, draft => {
    switch (action.type) {
      case FETCH_DISHES + START: {
        draft.loading = true
        break
      }
      case FETCH_DISHES + SUCCESS: {
        draft.loading = false
        draft.loaded = true
        draft.error = null
        draft.entities = arrayToMap(action.response)
        break
      }
      case FETCH_DISHES + FAIL: {
        draft.loading = false
        draft.loaded = false
        draft.error = action.error
        break
      }
      default:
        return
    }
  })
