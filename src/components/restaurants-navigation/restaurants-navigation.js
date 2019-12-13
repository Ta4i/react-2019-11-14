import React, {Component} from 'react'
import Menu from '../menu'
import MenuItem from '../menu/menu-item'

class RestaurantsNavigation extends Component {
  render() {
    const {restaurants} = this.props
    return (
      <Menu>
        {restaurants.map(({id, name}) => (
          <MenuItem key={id} id={id}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    )
  }
}

export default RestaurantsNavigation
