import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import {addReview} from '../../store/action-creators'
import cx from 'classnames'
import {connect} from 'react-redux'

import styles from './review-form.module.css'

const ReviewForm = ({id: restaurantId, addReview, form}) => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)

  const resetForm = () => {
    setName('')
    setText('')
    setRating(0)
    form.resetFields()
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    ev.persist()

    form.validateFields(err => {
      if (!err) {
        console.log('Submit', name, text, rating)
        addReview({restaurantId, name, text, rating})
        resetForm()
      }
    })
  }

  const handleNameChange = e => {
    setName(e.target.value)
    form.resetFields('name')
    //form.setFieldsValue({name})
  }

  const handleTextChange = e => {
    setText(e.target.value)
    form.resetFields('text')
    //form.setFieldsValue({text})
  }

  const handleRatingChange = value => {
    setRating(value)
    form.resetFields('rating')
    //form.setFieldsValue({rating})
  }

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              {form.getFieldDecorator('name', {
                initialValue: name,
                rules: [
                  {
                    required: true,
                    message: 'Please input your name!',
                    whitespace: true,
                  },
                ],
              })(
                <Input
                  onChange={handleNameChange}
                  placeholder="Your name"
                  className={cx(styles.inputName)}
                />
              )}
            </Form.Item>
            <Form.Item>
              {form.getFieldDecorator('text', {
                initialValue: text,
                rules: [
                  {
                    required: true,
                    message: 'Please leave a comment!',
                    whitespace: true,
                  },
                ],
              })(
                <Input.TextArea
                  onChange={handleTextChange}
                  rows={3}
                  size="large"
                />
              )}
            </Form.Item>
            <Form.Item>
              <div>
                Rating:{' '}
                {form.getFieldDecorator('rating', {
                  initialValue: rating,
                  rules: [
                    {
                      required: true,
                      pattern: /[1-5]/,
                      message: 'Please set a rating!',
                    },
                  ],
                })(<Rate onChange={handleRatingChange} />)}
              </div>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className={styles.submitButton}>
                PUBLISH REVIEW
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

const WrappedReviewForm = Form.create()(ReviewForm)

export default connect(
  null,
  {
    addReview,
  }
)(WrappedReviewForm)
