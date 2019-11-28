import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React from 'react'
import cx from 'classnames'

import styles from './review-form.module.css'

const ReviewForm = ({id}) => {
  const handleSubmit = ev => {
    ev.preventDefault()
  }

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input placeholder="Your name" className={cx(styles.inputName)} />
            <Input.TextArea rows={3} size="large" />
            <div>
              Rating: <Rate value={0} />
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

export default ReviewForm
