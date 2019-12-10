import {arrayToMap} from '../utils'
import {ADD_REVIEW, FAIL, FETCH_USERS, START, SUCCESS} from '../common'
import produce from 'immer'

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
}

export const usersReducer = (usersState = initialState, action) =>
  produce(usersState, draft => {
    switch (action.type) {
      case ADD_REVIEW: {
        if (!draft.entities[action.userId]) {
          draft.entities[action.userId] = {
            id: action.userId,
            name: action.payload.userName,
          }
        }
        break
      }
      case FETCH_USERS + START: {
        draft.loading = true
        break
      }
      case FETCH_USERS + SUCCESS: {
        draft.loading = false
        draft.loaded = true
        draft.error = null
        draft.entities = {
          ...draft.entities,
          ...arrayToMap(action.response),
        }
        break
      }
      case FETCH_USERS + FAIL: {
        draft.loading = false
        draft.loaded = false
        draft.error = action.error
        break
      }
      default:
        return
    }
  })
