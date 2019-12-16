import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../custom-hooks/use-input'
import cx from 'classnames'
import styles from './review-form.module.css'
import {useDispatch} from 'react-redux'
import {addReview} from '../../store/action-creators'
import {
  Consumer as LanguageConsumer,
  languageVars,
} from '../../contexts/language'

const ReviewForm = ({id}) => {
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
    <LanguageConsumer>
      {language => (
        <Card className={styles.reviewForm}>
          <Row type="flex" align="middle">
            <Col xs={24} md={18} align="left">
              <Typography.Title className={styles.addReviewTitle} level={4}>
                {languageVars.reviewFormHeading[language]}
              </Typography.Title>
              <Form onSubmit={handleSubmit}>
                <Input
                  value={name}
                  onChange={handleNameChange}
                  placeholder={languageVars.reviewFormName[language]}
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
                  {languageVars.reviewFormRating[language]}:{' '}
                  <Rate value={rating} onChange={handleRatingChange} />
                </div>
                <Button htmlType="submit" className={styles.submitButton}>
                  {languageVars.reviewFormButton[language]}
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>
      )}
    </LanguageConsumer>
  )
}

export default ReviewForm
