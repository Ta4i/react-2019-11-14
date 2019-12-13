import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/action-creators'

import {
  Consumer as FormConsumer,
  interValuesOrderForm,
} from '../../contexts/inter'

class OrderForm extends Component {
  state = {
    userName: '',
  }

  render() {
    const contextValue = interValuesOrderForm
    return (
      <Form
        layout={'inline'}
        style={{padding: '24px'}}
        onSubmit={this.handleSubmit}
      >
        <FormConsumer>
          {interType => (
            <div>
              <h1 ref={this.setRefForSomeHTMLElement}>
                {contextValue.formName[interType]}
              </h1>
              <Form.Item>
                <Input
                  ref={this.setInput}
                  placeholder={contextValue.formUserName[interType]}
                  value={this.state.userName}
                  onChange={this.handleUserNameInputChange}
                  style={{width: '120px'}}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {contextValue.formButton[interType]}
                </Button>
              </Form.Item>
            </div>
          )}
        </FormConsumer>
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
  null,
  {sendOrder}
)(OrderForm)
