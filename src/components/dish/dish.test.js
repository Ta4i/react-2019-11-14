import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dish from './dish'
import {restaurants} from '../../fixtures'

configure({adapter: new Adapter()})

const dishes = []

restaurants.map(restaurant => {
  for (let dish of restaurant.menu) {
    dishes.push(dish)
  }
})

const toFindDishById = dishId => {
  let dishFound = {}
  dishes.map(dish => {
    if (dish.id === dishId) {
      dishFound = dish
    }
  })

  return dishFound
}

for (let dish in dishes) {
  toTestDish(dishes[dish])
}

function toTestDish(dish) {
  dish = dish

  describe('Dish', () => {
    const wrapperComponent = mount(<Dish key={dish.id} dish={dish} />)
    const wrapper = wrapperComponent.find(
      `div[data-automation-id="DISH_${dish.id}"]`
    )
    const dishCurrent = toFindDishById(dish.id)

    it('Should work', () => {
      expect(
        wrapperComponent.find(`div[data-automation-id="DISH_${dish.id}"]`)
          .length
      ).toBe(1)
    })

    it('Should render correct dish title', () => {
      expect(
        wrapper
          .find('h4[data-automation-id="DISH_NAME"]')
          .first()
          .text()
      ).toBe(dishCurrent.name)
    })

    it('Should render correct dish ingredients', () => {
      expect(
        wrapper
          .find('div[data-automation-id="DISH_INGREDIENTS"]')
          .first()
          .text()
      ).toBe(dishCurrent.ingredients.join(', '))
    })

    it('Should render correct dish price', () => {
      expect(
        wrapper
          .find('div[data-automation-id="DISH_PRICE"]')
          .first()
          .text()
      ).toBe(dishCurrent.price + ' $')
    })
  })
}
