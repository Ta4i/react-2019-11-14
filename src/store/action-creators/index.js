export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

export const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

export const addToCart = dishId => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      addId: dishId,
    },
  }
}

export const removeFromCart = dishId => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {
      removeId: dishId,
    },
  }
}
