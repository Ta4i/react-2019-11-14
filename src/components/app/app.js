import React, {Component} from 'react'
import Restaurants from '../restaurants'

class App extends Component {
  componentDidMount() {
    console.log('mounted to DOM')
  }

  componentDidUpdate() {
    console.log('updated', this.state.count)
  }

  render() {
    const {restaurants} = this.props
    return (
      <div>
        <Restaurants restaurants={restaurants} />
      </div>
    )
  }
}

export default App
