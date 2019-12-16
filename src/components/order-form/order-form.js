import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/action-creators'
import {
  Consumer as LanguageConsumer,
  languageVars,
} from '../../contexts/language'

class OrderForm extends Component {
  state = {
    userName: '',
  }

  render() {
    return (
      <LanguageConsumer>
        {language => (
          <Form
            layout={'inline'}
            style={{padding: '24px'}}
            onSubmit={this.handleSubmit}
          >
            <h1 ref={this.setRefForSomeHTMLElement}>
              {languageVars.cartForm[language]}
            </h1>
            <Form.Item>
              <Input
                ref={this.setInput}
                placeholder={languageVars.cartFormUserName[language]}
                value={this.state.userName}
                onChange={this.handleUserNameInputChange}
                style={{width: '120px'}}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {languageVars.cartFormButton[language]}
              </Button>
            </Form.Item>
          </Form>
        )}
      </LanguageConsumer>
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
