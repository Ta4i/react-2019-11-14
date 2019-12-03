import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import cx from 'classnames'

import styles from './review-form.module.css'
import {addReview, createReview, createUser} from '../../store/action-creators'
import {connect} from 'react-redux'
import {selectReviews, selectUsers} from '../../store/selectors'
import {LAST_ID_CREATE_REVIEW, LAST_ID_CREATE_USER} from '../../store/common'

const ReviewForm = ({
  id: restaurantId,
  users,
  createUser,
  createReview,
  addReview,
}) => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const [thank, setThank] = useState('')

  const handleSubmit = ev => {
    ev.preventDefault()
    ev.persist()

    let userId = undefined
    for (let id in users) {
      if (users[id].name.toLowerCase() === name.toLowerCase()) {
        userId = id
        break
      }
    }

    if (!userId) {
      createUser(name)
      userId = LAST_ID_CREATE_USER // ? Не пойму как правильно получить ИД свежесозданного юзера
    }

    //ИД получаю в middleware - id-generator, понимаю что так делать не стоит

    createReview(userId, text, rating)
    addReview(restaurantId, LAST_ID_CREATE_REVIEW) // ? Аналогично

    setName('')
    setText('')
    setRating(0)
    setThank('Thank you for Review!')
    setTimeout(() => setThank(''), 2000)
  }

  const handleNameChange = e => setName(e.target.value)

  const handleTextChange = e => setText(e.target.value)

  const handleRatingChange = setRating

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
            <Typography.Title className={styles.addReviewTitle} level={4}>
              {thank}
            </Typography.Title>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

const mapsStateToProps = (state, ownProps) => ({
  users: selectUsers(state),
  reviews: selectReviews(state),
})

const mapDispatchToProps = {
  createUser: createUser,
  createReview: createReview,
  addReview: addReview,
}

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(ReviewForm)
