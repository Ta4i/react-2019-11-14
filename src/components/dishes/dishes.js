import React, {Component} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchDishes} from '../../store/action-creators'
import {selectDishes} from '../../store/selectors'

class Dishes extends Component {
  render() {
    const {menu, fetchDishes, dishes} = this.props
    if (fetchDishes && Object.values(dishes).length === 0) {
      fetchDishes()
      return <h1>Loading</h1>
    }
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
    dishes: selectDishes(state),
  }),
  {
    fetchDishes,
  }
)(Dishes)
