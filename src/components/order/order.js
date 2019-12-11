import React from 'react'
import {connect} from 'react-redux'
import {Button, Icon, Form, Input, Row, Col, Result} from 'antd'
import styles from './order.module.css'
import {postOrder} from '../../store/action-creators'
import { Link } from 'react-router-dom'
import {selectCart} from '../../store/selectors'
import { withRouter } from 'react-router-dom';

 class OrderForm extends React.Component {

  componentDidMount() {
    this.props.form.validateFields()
  }

  handleSubmit = e => {
    e.preventDefault()
    e.persist()
  
    const {form, postOrder, history, cart} = this.props
    form.validateFields((err, values) => {
      if (!err) {
        postOrder({...values, cart})
        history.push("/order/complete")
      }
    })
  }

  hasErrors = () => {
    const fieldsError = this.props.form.getFieldsError()
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }

  render = () => {
    const {form, cart} = this.props

    if (Object.keys(cart).length === 0) {
      return (
        <Result
          status="warning"
          title="Your cart is empty!"
          extra={[
            <Link to={'/'} key="back">
              <Button type="primary"  size="large">
                <Icon type="left" />Back
              </Button>
            </Link>,
          ]}
        />
      )
    }

    return (
    <Row type="flex" justify="center">
      <Col xs={20} md={10} lg={8} align="left">
          
      <Form onSubmit={this.handleSubmit}>
        <Form.Item 
          label="Name"
          validateStatus={(form.isFieldTouched('name') && form.getFieldError('name'))?'error':''}
        >
          {form.getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!'}],
          })(<Input prefix={<Icon type="user" />} />)}
        </Form.Item>
        <Form.Item 
          label="E-mail"
          validateStatus={(form.isFieldTouched('email') && form.getFieldError('email'))?'error':''}
        >
          {form.getFieldDecorator('email', {
            rules: [
              {type: 'email'},
              {required: true,message: 'Please input your E-mail!',},
            ],
          })(<Input prefix={<Icon type="mail" />}/>)}
        </Form.Item>
        <Form.Item 
          label="Phone Number"
          validateStatus={(form.isFieldTouched('phone') && form.getFieldError('phone'))?'error':''}  
        >
          {form.getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input prefix={<Icon type="phone" />}/>)}
        </Form.Item>
        <Form.Item 
          label="Address"
          validateStatus={(form.isFieldTouched('address') && form.getFieldError('address'))?'error':''}  
        >
          {form.getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your address!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item className={styles.buttonsContainer}>
          <Link to={'/'}>
            <Button size="large">
              <Icon type="left" />Back
            </Button>
          </Link>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            className={styles.orderButton}
            disabled={this.hasErrors()}
          >
            Order<Icon type="right" />
          </Button>
        </Form.Item>
      </Form>
      </Col>
    </Row>
  )
        }
}

const Order = Form.create({ name: 'order' })(OrderForm);

export default connect(state => ({ cart: selectCart(state) }), { postOrder })(withRouter(Order))
