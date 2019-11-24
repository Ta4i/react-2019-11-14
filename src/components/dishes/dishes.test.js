import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Restaurants from '../restaurants'
import {restaurants} from '../../fixtures'
import Dish from '../dish'
import Restaurant from '../restaurant'
import {Card, Typography, Button, Row, Col} from 'antd'

configure({adapter: new Adapter()})

describe('Dish', () => {
  describe('when plus clicked', function() {
    it('should +1 and others 0', () => {
      const dish = restaurants[1].menu[0]
      const wrapper = mount(<Dish dish={dish} />)

      const secondDish = restaurants[1].menu[1]
      const secondWrapper = mount(<Dish dish={secondDish} />)

      wrapper.find(`Button[data-automation-id="INCREASE"]`).simulate('click')

      expect(
        wrapper
          .find('div[data-automation-id="AMOUNT"]')
          .first()
          .text()
      ).toBe('1')

      expect(
        secondWrapper
          .find('div[data-automation-id="AMOUNT"]')
          .first()
          .text()
      ).toBe('0')
    })
  })

  describe('when minus clicked', function() {
    it('should be 0', () => {
      const dish = restaurants[1].menu[0]
      const wrapper = mount(<Dish dish={dish} />)

      wrapper.find(`Button[data-automation-id="DECREASE"]`).simulate('click')

      expect(
        wrapper
          .find('div[data-automation-id="AMOUNT"]')
          .first()
          .text()
      ).toBe('0')
    })

    it('should be 1', () => {
      const dish = restaurants[1].menu[0]
      const wrapper = mount(<Dish dish={dish} />)

      wrapper
        .find(`Button[data-automation-id="INCREASE"]`)
        .simulate('click')
        .simulate('click')

      wrapper.find(`Button[data-automation-id="DECREASE"]`).simulate('click')

      expect(
        wrapper
          .find('div[data-automation-id="AMOUNT"]')
          .first()
          .text()
      ).toBe('1')
    })
  })

  describe('when selected restaurant', function() {
    it('should be right name in first dish', () => {
      const wrapper = mount(<Restaurants restaurants={restaurants} />)
      // const restaurant = restaurants[1];

      for (let restaurant of restaurants) {
        wrapper
          .find(
            `span[data-automation-id="RESTAURANT_NAVIGATION_${restaurant.id}"]`
          )
          .simulate('click')

        expect(
          wrapper
            .find('h4[data-automation-id="DISH_NAME"]')
            .first()
            .text()
        ).toBe(restaurant.menu[0].name)
      }
    })
  })

  describe('when loaded dishes', function() {
    it('should be right price', () => {
      const wrapper = mount(<Restaurant restaurant={restaurants[0]} />)

      expect(
        wrapper
          .find(`div[data-automation-id="PRICE"]`)
          .first()
          .text()
      ).toBe(restaurants[0].menu[0].price + ' $')
    })
  })
})
