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
    case 'DEL_FROM_CART': {
      const {id} = action.payload
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] - 1 : 0,
      }
    }
  }
  return cartState
}
