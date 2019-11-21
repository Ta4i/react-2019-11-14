import React, { Component } from 'react'
import Review from '../review'




export default class Reviews extends Component {

    render() {
        const {reviews} = this.props
        

        return (
            <div style={{display: 'flex'}}>
                {reviews.map(review => {
                return <Review key={review.id} review={review} />
                })}
            </div>
        )
    }
}
