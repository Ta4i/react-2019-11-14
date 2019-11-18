import {useState, useCallback} from 'react'

export function useAmount(initialState = 0) {
  const [amount, setAmount] = useState(initialState)
  const increase = useCallback(() => {
    setAmount(amount + 1)
  }, [amount])
  const decrease = useCallback(() => {
    setAmount(amount > 0 ? amount - 1 : 0)
  }, [amount])

  return {
    amount,
    increase,
    decrease,
  }
}
