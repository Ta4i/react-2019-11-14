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

export const rejectToCart = dishId => {
  return {
    type: 'REJECT_TO_CART',
    payload: {
      id: dishId,
    },
  }
}

export const allOrderSum = sum => {
  return {
    type: 'ALL_ORDER_SUM',
    payload: {
      sum,
    },
  }
}
