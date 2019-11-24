import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dishes from './dishes'
import {restaurants} from '../../fixtures'
configure({adapter: new Adapter()})

describe('Тестирование React компонента Dishes: ', () => {
  const {menu} = restaurants[0]
  const wrapper = mount(<Dishes menu={menu} />)

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
})
