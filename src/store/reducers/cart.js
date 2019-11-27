export const cartReducer = (
  cartState = {
    //  id: <dish's amount>
  },
  action
) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const {id} = action.payload
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1,
      }
    }
    case 'REMOVE_FROM_CART': {
      const {id} = action.payload

      console.log('Call remove dish[' + id + '] from cart')
      const newCartState = {...cartState}

      if (newCartState[id]) {
        console.log('Previous value dish[' + id + ']=' + newCartState[id])
        if (newCartState[id] > 0) {
          newCartState[id]--
        }
        if (newCartState[id] === 0) {
          console.log('Delete dish[' + id + '] from cart')
          delete newCartState[id]
        }
      }
      return newCartState
    }
  }
  return cartState
}
