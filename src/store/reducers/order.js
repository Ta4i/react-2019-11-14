export const orderReducer = (orderState = {visible: false}, action) => {
  if (action.type === 'OPEN_ORDER') {
    orderState.visible = true
  }

  return orderState
}
