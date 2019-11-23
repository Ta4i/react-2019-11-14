import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Restaurants from '../restaurants'
import Dishes from '../dishes'
import {restaurants} from '../../fixtures'

configure({adapter: new Adapter()})

const menu = restaurants[0].menu // Из любого ресторана берем меню для первого теста 'should work'

describe('Dishes', () => {
  it('should work', () => {
    // Просто проврека, что рендерится один div для Dishes
    const wrapper = mount(<Dishes menu={menu} />)
    expect(wrapper.find('div[data-automation-id="DISHES"]').length).toBe(1)
  })

  it('should render selected restaurant menu', () => {
    const wrapper = mount(<Restaurants restaurants={restaurants} />)

    restaurants.forEach(item => {
      // прокликиваем все рестораны
      wrapper
        .find(`span[data-automation-id="RESTAURANT_NAVIGATION_${item.id}"]`)
        .simulate('click')
      const currentRestaurantMenu = item.menu

      currentRestaurantMenu.forEach(menuItem => {
        // пробегаем по меню каждого ресторана
        expect(
          wrapper.find(
            `div[data-automation-id="RESTAURANT_MENU_DISH_${menuItem.id}"]`
          ).length
        ).toBe(1) // убеждаемся, что id у блюда ровно один
      })
    })
  })
})
