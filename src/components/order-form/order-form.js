import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/action-creators'
import i18n from '../../decorators/i18n'

class OrderForm extends Component {
  state = {
    userName: '',
  }

  render() {
    const {t} = this.props
    return (
      <Form
        layout={'inline'}
        style={{padding: '24px'}}
        onSubmit={this.handleSubmit}
      >
        <h1 ref={this.setRefForSomeHTMLElement}>{t('Form')}</h1>
        <Form.Item>
          <Input
            ref={this.setInput}
            placeholder={t('User name')}
            value={this.state.userName}
            onChange={this.handleUserNameInputChange}
            style={{width: '120px'}}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {t('Send order')}
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

const mapStateToProps = state => ({
  dictionary: selectDictionaries(state).orderForm,
})

export default connect(
  mapStateToProps,
  {sendOrder}
)(i18n(OrderForm))
