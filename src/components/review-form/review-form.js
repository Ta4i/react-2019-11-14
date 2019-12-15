import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../custom-hooks/use-input'
import cx from 'classnames'

import styles from './review-form.module.css'
import {useDispatch} from 'react-redux'
import {addReview} from '../../store/action-creators'
import { LEFT } from '../../languages/orientation'
import {withLanguageContext} from '../../decorators/language'

const ReviewForm = ({id, language: {titles, orientation}}) => {
  const [rating, setRating] = useState(0)
  const [name, setName, isValidName, resetName] = useInput()
  const [text, setText, isValidText, resetText] = useInput()
  const dispatch = useDispatch()

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
      <Row 
        type="flex"
        align="middle"
        justify={orientation === LEFT ? "start" : "end"}
      >
        <Col xs={24} md={18}
          align={orientation === LEFT ? "left" : "right"}
        >
          <Typography.Title className={styles.addReviewTitle} level={4}>
            {titles.leaveYourReview}
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              value={name}
              onChange={handleNameChange}
              placeholder={titles.yourName}
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
            <div className={orientation === LEFT ? styles.left : styles.right}>
              <span
                className={orientation === LEFT ? styles.rateTitleLeft : styles.rateTitleRight}
              >
                {titles.rating}
              </span>
              <Rate 
                value={rating}
                onChange={handleRatingChange}
                className={orientation === LEFT ? '' : styles.rateRight}
              />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              {titles.publishReview}
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export default withLanguageContext(ReviewForm)
