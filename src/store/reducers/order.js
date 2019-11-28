export const orderReducer = (orderState = {visible: false}, action) => {
  if (action.type === 'OPEN_ORDER') return {visible: true} //orderState.visible = true - не сработает: в стор запишется, но не перерендерится...

  return orderState
}
