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

export const showTotal = () => {
  return {
    type: 'SHOW_TOTAL',
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

export const removeFromCart = dishId => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      id: dishId,
    },
  }
}
