import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dish from './dish'
import {restaurants} from '../../fixtures'
import Restaurants from '../restaurants'

configure({adapter: new Adapter()})

describe('Dish', () => {
  const CLICK_COUNT = 3

  restaurants.map(restaurant =>
    restaurant.menu.map(dish => {
      const wrapper = mount(<Dish dish={dish} />)

      it('should render dishes valid name', () => {
        expect(wrapper.find(`h4[data-automation-id="DISH_NAME"]`).text()).toBe(
          dish.name
        )
      })

      it('should render dishes valid price', () => {
        expect(
          wrapper.find(`div[data-automation-id="DISH_PRICE"]`).text()
        ).toBe(`${dish.price} $`)
      })

      it('should render dishes valid ingridients', () => {
        expect(
          wrapper
            .find(`div[data-automation-id="DISH_INGREDIENTS"]`)
            .text()
            .toLowerCase()
        ).toBe(dish.ingredients.join(', ').toLowerCase())
      })

      it('start amount dishes should be 0', () => {
        expect(wrapper.find(`div[data-automation-id="AMOUNT"]`).text()).toBe(
          '0'
        )
      })

      describe(`when increase button clicked`, () => {
        it('should increase amount by 1', () => {
          const amount = parseInt(
            wrapper.find('div[data-automation-id="AMOUNT"]').text()
          )
          for (let i = amount; i < amount + CLICK_COUNT; i++) {
            wrapper
              .find(`button[data-automation-id="INCREASE"]`)
              .simulate('click')
            expect(
              wrapper.find('div[data-automation-id="AMOUNT"]').text()
            ).toBe(`${i + 1}`)
          }
        })
      })

      describe(`when decrease button clicked`, () => {
        it('should decrease amount by 1', () => {
          const amount = parseInt(
            wrapper.find('div[data-automation-id="AMOUNT"]').text()
          )
          for (let i = amount; i > 0; i--) {
            wrapper
              .find(`button[data-automation-id="DECREASE"]`)
              .simulate('click')
            expect(
              wrapper.find('div[data-automation-id="AMOUNT"]').text()
            ).toBe(`${i - 1}`)
          }
        })

        it('should not decrease amount less then 1', () => {
          wrapper
            .find(`button[data-automation-id="DECREASE"]`)
            .simulate('click')
          expect(wrapper.find('div[data-automation-id="AMOUNT"]').text()).toBe(
            '0'
          )
        })
      })
    })
  )

  describe(`when increase button clicked`, () => {
    const wrapper = mount(<Restaurants restaurants={restaurants} />)
    it('should increase only current item', () => {
      const amounts = wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .map(e => e.text())
      for (let i = 0; i < CLICK_COUNT; i++) {
        wrapper
          .find(`button[data-automation-id="INCREASE"]`)
          .first()
          .simulate('click')
        expect(
          wrapper
            .find('div[data-automation-id="AMOUNT"]')
            .map((e, i) => e.text())
            .slice(1)
        ).toEqual(amounts.slice(1))
      }
    })
    it('should decrease only current item', () => {
      const amounts = wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .map(e => e.text())
      for (let i = amounts[0]; i > 0; i--) {
        wrapper
          .find(`button[data-automation-id="DECREASE"]`)
          .first()
          .simulate('click')
        expect(
          wrapper
            .find('div[data-automation-id="AMOUNT"]')
            .map((e, i) => e.text())
            .slice(1)
        ).toEqual(amounts.slice(1))
      }
    })
  })
})
