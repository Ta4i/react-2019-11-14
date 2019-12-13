import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../custom-hooks/use-input'
import cx from 'classnames'

import styles from './review-form.module.css'
import {useDispatch} from 'react-redux'
import {addReview} from '../../store/action-creators'

import {
  Consumer as InterConsumer,
  interValuesReviews,
} from '../../contexts/inter'

const ReviewForm = ({id}) => {
  const [rating, setRating] = useState(0)
  const [name, setName, isValidName, resetName] = useInput()
  const [text, setText, isValidText, resetText] = useInput()
  const dispatch = useDispatch()

  const contextValue = interValuesReviews

  const resetForm = () => {
    resetName()
    resetText()
    setRating(null)
  }
  const handleSubmit = ev => {
    ev.preventDefault()
    dispatch(addReview(name, +rating, text, id))
    resetForm()
  }

  const handleNameChange = setName

  const handleTextChange = setText

  const handleRatingChange = setRating

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <InterConsumer>
            {interType => (
              <div>
                <Typography.Title className={styles.addReviewTitle} level={4}>
                  {contextValue.reviewTitle[interType]}
                </Typography.Title>
                <Form onSubmit={handleSubmit}>
                  <Input
                    value={name}
                    onChange={handleNameChange}
                    placeholder={contextValue.reviewName[interType]}
                    className={cx(
                      {
                        [styles.invalid]: !isValidName,
                      },
                      styles.inputName
                    )}
                  />
                  <Input.TextArea
                    value={text}
                    onChange={handleTextChange}
                    rows={3}
                    size="large"
                    className={cx({
                      [styles.invalid]: !isValidText,
                    })}
                  />
                  <div>
                    {contextValue.reviewRating[interType]}
                    <Rate value={rating} onChange={handleRatingChange} />
                  </div>
                  <Button htmlType="submit" className={styles.submitButton}>
                    {contextValue.reviewButton[interType]}
                  </Button>
                </Form>
              </div>
            )}
          </InterConsumer>
        </Col>
      </Row>
    </Card>
  )
}

export default ReviewForm
