export const allOrderSumReducer = (sum = 0, action) => {
  switch (action.type) {
    case 'ALL_ORDER_SUM':
      sum = action.payload.sum
      break
    default:
      sum = 0
  }

  return sum
}
