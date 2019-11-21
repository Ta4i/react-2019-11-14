// decorator or HOC - higher order component
import React from 'react'
import {useAmount} from '../custom-hooks/use-amount'

export default function counterDecorator(OriginalComponent) {
  return props => {
    const {amount, decrease, increase} = useAmount(0)

    return (
      <OriginalComponent
        {...props}
        amount={amount}
        decrease={decrease}
        increase={increase}
      />
    )
  }
}
