export const cartModalReducer = (cartModalState = false, action) => {
  switch (action.type) {
    case 'OPEN_CART': {
      return (cartModalState = true)
    }

    case 'CLOSE_CART': {
      return (cartModalState = false)
    }

    default: {
      return cartModalState
    }
  }
}
