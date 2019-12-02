export const cartReducer = (
  cartState = {
    //  id: <dish's amount>
  },
  action
) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const addId = action.payload.id
      return {
        ...cartState,
        [addId]: cartState[addId] ? cartState[addId] + 1 : 1,
      }
      break

    case 'REJECT_TO_CART':
      const rejectid = action.payload.id
      return {
        ...cartState,
        [rejectid]: cartState[rejectid] > 0 ? cartState[rejectid] - 1 : 0,
      }
      break
  }
  return cartState
}
