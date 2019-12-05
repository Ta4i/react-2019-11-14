import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import {selectUsers} from '../../store/selectors'
import cx from 'classnames'
import {addReview, addUser} from '../../store/action-creators'
import styles from './review-form.module.css'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const ReviewForm = ({id, addReview, addUser, users}) => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)

  let user = users.find(user => user.name === name)

  let handleSubmit = ev => {
    ev.preventDefault()
    ev.persist()
    if (user === undefined) {
      addUser(name)
      user = users.find(user => user.name === name)
    }
    if (user != undefined) {
      addReview(id, user.id, text, rating)
    }
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
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export const ReviewFormPropTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
}

ReviewForm.propTypes = ReviewFormPropTypes

const mapsStateToProps = (state, ownPops) => ({
  users: Object.values(selectUsers(state)),
})

const mapDispatchToProps = {
  addReview: addReview,
  addUser: addUser,
}

export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(ReviewForm)
