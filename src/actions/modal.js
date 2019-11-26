export const openModal = title => {
  return {
    type: 'OPEN_MODAL',
    title,
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL',
  }
}
