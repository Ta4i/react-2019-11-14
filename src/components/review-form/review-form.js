import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../custom-hooks/use-input'
import cx from 'classnames'

import styles from './review-form.module.css'
import {useDispatch} from 'react-redux'
import {addReview} from '../../store/action-creators'
import {Consumer as LanguageConsumer} from '../../contexts/language'
import {connect} from 'react-redux'
import {selectDictionaries} from '../../store/selectors'

const ReviewForm = ({id, dictionary}) => {
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
                {dictionary[language].review_title}
              </Typography.Title>
              <Form onSubmit={handleSubmit}>
                <Input
                  value={name}
                  onChange={handleNameChange}
                  placeholder={dictionary[language].your_name}
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
                  {dictionary[language].rating + ': '}
                  <Rate value={rating} onChange={handleRatingChange} />
                </div>
                <Button htmlType="submit" className={styles.submitButton}>
                  {dictionary[language].publish_review}
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>
      )}
    </LanguageConsumer>
  )
}

export default connect(state => ({
  dictionary: selectDictionaries(state).reviewForm,
}))(ReviewForm)
