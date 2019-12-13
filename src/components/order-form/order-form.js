import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/action-creators'
import {Consumer as LanguageConsumer} from '../../contexts/language'
import {selectDictionaries} from '../../store/selectors'

class OrderForm extends Component {
  state = {
    userName: '',
  }

  render() {
    const {dictionary} = this.props

    return (
      <LanguageConsumer>
        {language => (
          <Form
            layout={'inline'}
            style={{padding: '24px'}}
            onSubmit={this.handleSubmit}
          >
            <h1 ref={this.setRefForSomeHTMLElement}>
              {dictionary[language].form}
            </h1>
            <Form.Item>
              <Input
                ref={this.setInput}
                placeholder={dictionary[language].user_name}
                value={this.state.userName}
                onChange={this.handleUserNameInputChange}
                style={{width: '120px'}}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {dictionary[language].send_order}
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

const mapStateToProps = state => ({
  dictionary: selectDictionaries(state).orderForm,
})

export default connect(
  mapStateToProps,
  {sendOrder}
)(OrderForm)
