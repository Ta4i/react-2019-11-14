const initialState = {
  title: '',
  visible: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        title: action.title,
        visible: true,
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        title: '',
        visible: false,
      }
    default:
      return state
  }
}
