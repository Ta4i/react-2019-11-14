export const arrayToMap = arr =>
  arr.reduce((map, item) => {
    return {
      ...map,
      [item.id]: item,
    }
  }, {})
