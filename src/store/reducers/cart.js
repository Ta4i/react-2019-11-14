export const cartReducer = (
  cartState = {
    //  id: <dish's amount>
  },
  action
) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const {addId} = action.payload
      return {
        ...cartState,
        [addId]: cartState[addId] ? cartState[addId] + 1 : 1,
      }

    case 'REMOVE_FROM_CART':
      const {removeId} = action.payload
      return {
        ...cartState,
        [removeId]: cartState[removeId] ? cartState[removeId] - 1 : 0,
      }

    default:
    // something
  }
  return cartState
}
