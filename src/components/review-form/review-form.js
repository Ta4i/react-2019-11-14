import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addReview} from '../../store/action-creators'
import cx from 'classnames'
import styles from './review-form.module.css'

const ReviewForm = ({id, users, addReview}) => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)

  const handleSubmit = ev => {
    ev.preventDefault()
    ev.persist()
    //можно сделать проверку и вывести ошибку, но лучше это делать с formik
    //предполагаю, что все поля заполнены

    // я бы сгенерировал id здесь и передал дальше, почему так делать не следует?

    addReview({
      name,
      text,
      rating,
    })
  }

  const handleNameChange = e => setName(e.target.value)

  const handleTextChange = e => setText(e.target.value)

  const handleRatingChange = rate => setRating(rate)

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              value={name}
              onChange={handleNameChange}
              placeholder="Your name"
              className={cx(styles.inputName)}
            />
            <Input.TextArea
              value={text}
              onChange={handleTextChange}
              rows={3}
              size="large"
            />
            <div>
              Rating: <Rate value={rating} onChange={handleRatingChange} />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

const mapStateToProps = state => ({
  users: state.users,
})

const mapDispatchToProps = {
  addReview,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)