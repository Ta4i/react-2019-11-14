import React, {Component} from 'react'
import './style.scss'

export default class Testimonials extends Component {
  render() {
    const {testimonials = []} = this.props
    return (
      <div className="testimonials">
        <h2>Testimonials:</h2>
        {testimonials.map(testimonial => (
          <div className="testimonial" key={testimonial.id}>
            <div>name: {testimonial.user}</div>
            <div>text: {testimonial.text}</div>
            <div>rating: {testimonial.rating}</div>
          </div>
        ))}
      </div>
    )
  }
}
