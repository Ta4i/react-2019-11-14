import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dishes from './dishes'
import Dish from '../dish'
import {restaurants} from '../../fixtures'

configure({adapter: new Adapter()})

const menu = restaurants[0].menu

describe('Dishes', () => {
  it('should work', () => {
    const menu = restaurants[0].menu
    const wrapper = mount(<Dishes menu={menu} />)
    expect(wrapper.find('div[data-automation-id="DISHES"]').length).toBe(1)
  })

  it('should render restaurant dishes', () => {
    const menu = restaurants[1].menu
    const wrapper = mount(<Dishes menu={menu} />)
    expect(wrapper.find(Dish).length).toBe(menu.length)
  })

  it('should render dishes price', () => {
    const dish = restaurants[2].menu[0]
    const menu = restaurants[2].menu
    const wrapper = mount(<Dishes menu={menu} />)
    wrapper.find(`div[data-automation-id="DISH_${dish.id}"]`)
    expect(
      wrapper
        .find('h4[data-automation-id="DISH_NAME"]')
        .first()
        .text()
    ).toBe(dish.name)
  })
})
