import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dishes from './dishes'
import {restaurants} from '../../fixtures'
configure({adapter: new Adapter()})

describe('Тестирование React компонента Dishes: ', () => {
  // начинается hard code и принудительная выборка с костылями
  const {menu} = restaurants[0]
  const menuWrapper = menu
    .map((dish, inx) => {
      return {...dish, _dishID: inx}
    })
    .filter(dish => dish._dishID === 0 || dish._dishID === 1)
  const wrapper = mount(<Dishes menu={menuWrapper} />)
  const firstDish = menuWrapper[0]
  const secondDish = menuWrapper[1]

  it('Монтирование компонента с корректными начальными данными: ', () => {
    expect(
      wrapper.find('div[data-automation-id="DISHES_CONTAINER"]').length
    ).toBe(1)
  })

  it('Имеется дочерний компонент и его значение равно 0: ', () => {
    expect(
      wrapper.find('div[data-automation-id="AMOUNT"]').forEach(node => {
        expect(node.text()).toBe('0')
      })
    )
  })

  describe('Тестирование взаимодействия дочерних компонентов компонентов', () => {
    const firstContent = `[data-automation-id="DISH_KEY_${firstDish.id}"]`
    const secondContent = `[data-automation-id="DISH_KEY_${secondDish.id}"]`
    const value = `div[data-automation-id="AMOUNT"]`
    const increse = `button[data-automation-id="INCREASE"]`

    it('При добавлении блюда в заказ, изменяется кол-во у данной позиции : ', () => {
      wrapper
        .find(firstContent)
        .find(increse)
        .simulate('click')

      expect(
        wrapper
          .find(firstContent)
          .find(value)
          .text()
      ).toBe('1')
    })

    it('Кол-во остальных позиций остается неизменным', () => {
      expect(
        wrapper
          .find(secondContent)
          .find(value)
          .text()
      ).toBe('0')
    })
  })
})
