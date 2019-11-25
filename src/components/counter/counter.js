import React, {Component} from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'
import {increment} from '../../store/action-creators'

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
    this.props.dispatch({
      type: 'DECREMENT',
    })
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
