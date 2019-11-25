import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dishes from './dishes'
import {restaurants} from '../../fixtures'

configure({adapter: new Adapter()})

const menus = []

restaurants.map(restaurant => {
  let menu = {}
  menu.id = restaurant.id
  menu.menu = restaurant.menu
  menus.push(menu)
})

for (let menu in menus) {
  toTestDishes(menus[menu])
}

function toTestDishes(menu) {
  menu = menu

  describe('Dishes', () => {
    const wrapperComponent = mount(<Dishes menu={menu.menu} id={menu.id} />)
    const wrapper = wrapperComponent.find(
      `div[data-automation-id="DISHES_${menu.id}"]`
    )
    it('should work', () => {
      expect(wrapper.length).toBe(1)
    })

    it('should render correct qty of dishes', () => {
      expect(wrapper.find('div[data-item="DISH"]').length).toBe(
        menu.menu.length
      )
    })
  })
}
