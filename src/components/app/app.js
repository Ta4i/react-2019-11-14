import React, {Component} from 'react'

class App extends Component {
  state = {
    count: 0,
  }

  constructor(props) {
    super(props)
    console.log(props)

    // this.state = {
    //   count: 0
    // }

    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log('mounted to DOM')
  }

  componentDidUpdate() {
    console.log('updated')
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }

  handleClick = () => {
    this.setState(state => {
      return {
        count: state.count + 1,
      }
    })
  }
}

export default App
