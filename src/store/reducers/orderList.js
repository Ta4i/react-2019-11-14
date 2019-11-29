export const orderListReducer = (orderListState = {}, action) => {
  // const dish = action.payload

  if (action.type === 'MAKE_ORDER_LIST') {
    orderListState = {
      // ... здесь должен быть код для добавления в store блюда ...
    }
  }

  // ... а здесь для удаления ...

  return orderListState
}
