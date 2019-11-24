import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Restaurants from '../restaurants'
import Dishes from './dishes'
import {restaurants} from '../../fixtures'

configure({adapter: new Adapter()})

describe('Dishes', () => {
  const wrapper = mount(<Restaurants restaurants={restaurants} />)

  restaurants.map(restaurant => {
    describe(`when Restaurant navigation clicked (id: ${
      restaurant.id
    })`, () => {
      it('should work', () => {
        wrapper
          .find(
            `span[data-automation-id="RESTAURANT_NAVIGATION_${restaurant.id}"]`
          )
          .simulate('click')

        expect(wrapper.find('div[data-automation-id="DISHES"]').length).toBe(1)
      })

      it('should render valid dishes for selected Restaurant', () => {
        wrapper
          .find(
            `span[data-automation-id="RESTAURANT_NAVIGATION_${restaurant.id}"]`
          )
          .simulate('click')

        restaurant.menu.map((dish, i) =>
          expect(
            wrapper
              .find(`[data-automation-id="DISH_${i}"]`)
              .first()
              .prop('dish').id
          ).toBe(dish.id)
        )
      })
    })
  })
})
