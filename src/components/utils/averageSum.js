export default values => {
  const defaultVal = {avg: 0, n: 0}

  function average({avg, n}, values) {
    return {
      avg: (values.rating + n * avg) / (n + 1),
      n: n + 1,
    }
  }

  return values.reduce(average, defaultVal).avg
}
