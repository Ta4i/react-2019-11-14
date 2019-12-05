export default store => next => action => {
  const {callAPI, ...rest} = action

  if (!callAPI) {
    return next(rest)
  }

  fetch(callAPI)
    .then(res => res.json())
    .then(res =>
      next({
        ...rest,
        response: res,
      })
    )
}
