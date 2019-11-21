import React, {Component} from 'react'
import Restuarants from '../restaurants'

class App extends Component {
  render() {
    const {restaurants} = this.props

    return (
      <div>
        <Restuarants restaurants={restaurants} />
      </div>
    )
  }
}

export default App
