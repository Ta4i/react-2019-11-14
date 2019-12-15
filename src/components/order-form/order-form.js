import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/action-creators'
import { LEFT } from '../../languages/orientation'
import {withLanguageContext} from '../../decorators/language'

class OrderForm extends Component {
  state = {
    userName: '',
  }

  render() {
    const {titles, orientation} = this.props.language
    
    return (
      <Form
        layout={'inline'}
        style={{padding: '24px', textAlign: (orientation === LEFT) ? "left" : "right"}}
        onSubmit={this.handleSubmit}
      >
        <h1 ref={this.setRefForSomeHTMLElement}>{titles.form}</h1>
        <Form.Item style={{float: (orientation === LEFT) ? "left" : "right"}}>
          <Input
            ref={this.setInput}
            placeholder={titles.userName}
            value={this.state.userName}
            onChange={this.handleUserNameInputChange}
            style={{width: '120px'}}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {titles.sendOrder}
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
  null,
  {sendOrder}
)(withLanguageContext(OrderForm))
