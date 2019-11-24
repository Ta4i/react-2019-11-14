import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dishes from './dishes'
import {restaurants} from '../../fixtures'

configure({adapter: new Adapter()})

describe('Dish', () => {
  it('should work', () => {
    const wrapper = mount(<Dishes menu={restaurants[0].menu} />)
    expect(wrapper.find('div[data-automation-id="DISHES"]').length).toBe(1)
  })

  describe('when Dishes render', () => {
    it('should render menu', () => {
      const wrapper = mount(<Dishes menu={restaurants[0].menu} />)
      expect(wrapper.find('h4[data-automation-id="DISH_NAME"]').length).toBe(
        restaurants[0].menu.length
      )
    })
  })

  describe('when first Dish render', () => {
    it('should render name, ingredients, price', () => {
      const wrapper = mount(<Dishes menu={restaurants[0].menu} />)
      expect(
        wrapper
          .find('h4[data-automation-id="DISH_NAME"]')
          .first()
          .text()
      ).toBe(restaurants[0].menu[0].name)

      expect(
        wrapper
          .find('div[data-automation-id="DISH_DESCRIPTION"]')
          .first()
          .text()
      ).toBe(restaurants[0].menu[0].ingredients.join(', '))

      expect(
        wrapper
          .find('div[data-automation-id="DISH_PRICE"]')
          .first()
          .text()
      ).toBe(restaurants[0].menu[0].price + ' $')
    })
  })

  describe('when click increase/decrease button', () => {
    it('should increase and decrease amount dish', () => {
      const wrapper = mount(<Dishes menu={restaurants[0].menu} />)
      let countDishes = wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
      //increase
      countDishes++
      wrapper
        .find('button[data-automation-id="INCREASE"]')
        .first()
        .simulate('click')
      expect(
        wrapper
          .find('div[data-automation-id="AMOUNT"]')
          .first()
          .text()
      ).toBe(countDishes.toString())
      //decrease
      countDishes--
      wrapper
        .find('button[data-automation-id="DECREASE"]')
        .first()
        .simulate('click')
      expect(
        wrapper
          .find('div[data-automation-id="AMOUNT"]')
          .first()
          .text()
      ).toBe(countDishes.toString())
    })
  })
})
