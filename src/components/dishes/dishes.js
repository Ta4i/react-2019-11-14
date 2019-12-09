import React, {Component} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchDishes} from '../../store/action-creators'
import {selectDishesLoaded, selectDishesLoading} from '../../store/selectors'
import Loader from '../loader'

class Dishes extends Component {
  componentDidMount() {
    const {fetchDishes, dishesLoading, dishesLoaded} = this.props
    if (!dishesLoading && !dishesLoaded) {
      fetchDishes()
    }
  }

  render() {
    const {menu, dishesLoading} = this.props

    if (dishesLoading) {
      return <Loader />
    }
    console.log(menu)
    return (
      <div>
        {menu.map(dishId => (
          <Dish key={dishId} id={dishId} />
        ))}
      </div>
    )
  }
}

export const DishesPropTypes = {
  menu: PropTypes.arrayOf(PropTypes.string),
}

Dishes.propTypes = DishesPropTypes

export default connect(
  state => ({
    dishesLoading: selectDishesLoading(state),
    dishesLoaded: selectDishesLoaded(state),
  }),
  {
    fetchDishes,
  }
)(Dishes)
