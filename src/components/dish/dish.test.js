import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dish from './dish'
import {restaurants} from '../../fixtures'

configure({adapter: new Adapter()})

const mockDish = restaurants[0].menu[0]

describe('Dish', () => {
  it('should work', () => {
    const wrapper = mount(<Dish dish={mockDish} />)

    expect(wrapper.find('div[data-automation-id="DISH"]').length).toBe(1)
  })

  it('should display right price', () => {
    const wrapper = mount(<Dish dish={mockDish} />)

    expect(wrapper.find('div[data-automation-id="DISH_PRICE"]').text()).toBe(
      `${mockDish.price} $`
    )
  })

  //Я хотел передовать amount через переменную, чтобы тесты были чище, но увы counter обертка не передает
  // amount  из-за хука
  describe('Dish Counter', () => {
    it('should increment', () => {
      const wrapper = mount(<Dish dish={mockDish} />)
      wrapper
        .find('button[data-automation-id="DISH_AMOUNT_INCREASE"]')
        .simulate('click')

      expect(wrapper.find('div[data-automation-id="DISH_AMOUNT"]').text()).toBe(
        '1'
      )
    })

    it('should decrement', () => {
      const wrapper = mount(<Dish dish={mockDish} />)
      wrapper
        .find('button[data-automation-id="DISH_AMOUNT_INCREASE"]')
        .simulate('click')

      wrapper
        .find('button[data-automation-id="DISH_AMOUNT_INCREASE"]')
        .simulate('click')

      wrapper
        .find('button[data-automation-id="DISH_AMOUNT_DECREASE"]')
        .simulate('click')

      expect(wrapper.find('div[data-automation-id="DISH_AMOUNT"]').text()).toBe(
        '1'
      )
    })

    it('should not go below 0', () => {
      const wrapper = mount(<Dish dish={mockDish} />)

      wrapper
        .find('button[data-automation-id="DISH_AMOUNT_DECREASE"]')
        .simulate('click')

      expect(wrapper.find('div[data-automation-id="DISH_AMOUNT"]').text()).toBe(
        '0'
      )
    })
  })
})
