import React, {Component} from 'react'

class Restaurant extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>{this.props.name}</h2>
        <h4> {this.showRaiting()}</h4>
        <hr />
        <ul>
          {this.props.reviews.map(reviews => {
            return (
              <li key={reviews.id}>
                <p>{reviews.user}</p>
                <p>{reviews.text}</p>
                <hr />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  showRaiting = () => {
    let averageRating = 0
    let reviews = this.props.reviews
    if (0 === this.props.reviews.length) {
      return 'У ресторана еще нет оценок'
    }
    for (let i = 0; i < reviews.length; i++) {
      averageRating = averageRating + reviews[i].rating
    }
    return (averageRating / this.props.reviews.length).toFixed(1)
  }
}

export default Restaurant
