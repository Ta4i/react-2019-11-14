export const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

export const addToCart = dishId => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: dishId,
    },
  }
}

export const delFromCart = dishId => {
  return {
    type: 'DEL_FROM_CART',
    payload: {
      id: dishId,
    },
  }
}
