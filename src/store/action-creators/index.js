export const increment = () => {
  return {
    type: 'INCREMENT',
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

export const openOrder = () => {
  return {
    type: 'OPEN_ORDER',
  }
}

export const orderList = (dishId, dishName, dishCount, dishPrice) => {
  return {
    type: 'MAKE_ORDER_LIST',
    payload: {
      id: dishId,
      name: dishName,
      count: dishCount,
      price: dishPrice,
    },
  }
}
