export const cartReducer = (cartState = {}, action) => {
  const {id} = action.payload ? action.payload : ''

  switch (action.type) {
    case 'ADD_TO_CART':
      // const addObject = {
      //   ...cartState,
      //   [id]: cartState[id] ? cartState[id] + 1 : 1,
      // }
      // console.log(addObject)
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1,
      }
    case 'REMOVE_FROM_CART':
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] - 1 : 0,
      }
  }

  return cartState
}
