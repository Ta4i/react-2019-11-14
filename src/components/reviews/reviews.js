import React from 'react'
import Review from '../review'
import {Carousel} from 'antd'

function Reviews(props) {
  const {reviews} = props
  return (
    <div>
      <br />
      <h3>Reviews:</h3>
      <Carousel autoplay>
        {reviews.map(review => {
          return (
            <div>
              <Review review={review} />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
export default Reviews
