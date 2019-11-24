import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dish from './dish'
import {restaurants} from '../../fixtures'
configure({adapter: new Adapter()})

describe('Тестирование React компонента Dish: ', () => {
  const {menu} = restaurants[0]
  const dish = menu[0]
  const wrapper = mount(<Dish dish={dish} />)

  it('Монтирование компонента с корректными начальными данными: ', () => {
    expect(
      wrapper
        .find('h4[data-automation-id="DISH_NAME"]')
        .first()
        .text()
    ).toBe(dish.name)
    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
    ).toBe('0')
  })

  it('Добавление двух блюд в заказ: ', () => {
    wrapper
      .find('button[data-automation-id="INCREASE"]')
      .simulate('click')
      .simulate('click')
    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
    ).toBe('2')
  })

  it('Удаление одного блюда из заказа: ', () => {
    wrapper.find('button[data-automation-id="DECREASE"]').simulate('click')
    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
    ).toBe('1')
  })

  it('Если блюда в заказе нет и мы пытаемся уменьшить кол-во, то оно не становится отрицательным: ', () => {
    wrapper
      .find('button[data-automation-id="DECREASE"]')
      .simulate('click')
      .simulate('click')
      .simulate('click')
      .simulate('click')
    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
    ).toBe('0')
  })
})
