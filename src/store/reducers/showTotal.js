export const showTotalReducer = (showState = false, action) => {
  return action.type === 'SHOW_TOTAL' && showState
    ? (showState = false)
    : (showState = true)
}
