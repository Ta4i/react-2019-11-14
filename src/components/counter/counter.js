import React, {Component} from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'
import {increment, decrement} from '../../store/action-creators'

class Counter extends Component {
  render() {
    return (
      <div>
        <span style={{padding: '16px'}}>{this.props.count}</span>
        <Button.Group>
          <Button onClick={this.decrease} type="primary" icon="minus" />
          <Button onClick={this.increase} type="primary" icon="plus" />
        </Button.Group>
      </div>
    )
  }

  decrease = () => {
    this.props.decrementFromDispatch()
  }
  increase = () => {
    this.props.incrementFromDispatch()
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = {
  incrementFromDispatch: increment,
  decrementFromDispatch: decrement,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
