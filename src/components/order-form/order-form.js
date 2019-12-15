import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/action-creators'
import {selectOrderBundle} from '../../store/selectors/'

class OrderForm extends Component {
  state = {
    userName: '',
  }

  render() {
    const {bundle} = this.props
    return (
      <Form
        layout={'inline'}
        style={{padding: '24px'}}
        onSubmit={this.handleSubmit}
      >
        <h1 ref={this.setRefForSomeHTMLElement}>{bundle.formName}</h1>
        <Form.Item>
          <Input
            ref={this.setInput}
            placeholder={bundle.tip}
            value={this.state.userName}
            onChange={this.handleUserNameInputChange}
            style={{width: '120px'}}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {bundle.sendOrderButton}
          </Button>
        </Form.Item>
      </Form>
    )
  }

  handleUserNameInputChange = ({target: {value}}) => {
    this.setState({
      userName: value,
    })
    this.props.onUserNameChange(value)
  }

  setRefForSomeHTMLElement = ref => {
    this.someHTMLElement = ref
  }

  setInput = ref => {
    this.userNameInput = ref
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.sendOrder(this.state)
  }
}

export default connect(
  (state, ownProps) => {
    return {
      bundle: selectOrderBundle(state, {lang: ownProps.language}),
    }
  },
  {sendOrder}
)(OrderForm)
