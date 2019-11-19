import {useState, useEffect} from 'react'

export function useRating(ratings) {
  const [rating, setRating] = useState(average(ratings))

  useEffect(() => {
    const newRating = average(ratings)
    if (rating !== newRating) {
      setRating(newRating)
    }
  }, [ratings])

  return [rating, setRating]
}

function average(values) {
  if (!values || !values.length) return 0
  return values.reduce((acc, value) => acc + value, 0) / values.length
}
