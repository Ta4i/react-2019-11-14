import {ADD_REVIEW, FETCH_USERS} from '../common'

/**
 * Управление состоянием о всех пользователях ресторанов
 * Данные о пользователях загружаются с сервера
 */
export const usersReducer = (usersState = [], action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      if (!usersState[action.userId]) {
        return {
          ...usersState,
          [action.userId]: {
            id: action.userId,
            name: action.payload.userName,
          },
        }
      } else {
        return usersState
      }
    }
    case FETCH_USERS: {
      // добавляем пришедших с сервера пользователей в стор
      return action.response.reduce(
        (acc, item) => {
          acc[item.id] = item
          return acc
        },
        {...usersState}
      )
    }
    default:
      return usersState
  }
}
