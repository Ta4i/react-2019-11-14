import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dishes from './dishes'
import {restaurants} from '../../fixtures'

configure({adapter: new Adapter()})

describe('Dishes', () => {
  it('should work', () => {
    const wrapper = mount(<Dishes menu={restaurants[0].menu} />)

    expect(wrapper.find('div[data-automation-id="DISHES"]').length).toBe(1)
  })

  it('should fetch data if possible', function(done) {
    mount(<Dishes menu={restaurants[0].menu} fetchDishes={() => done()} />)
  })

  describe('when Dishes', function() {
    it('should render name', () => {
      const secondDish = restaurants[0].menu[0]
      const wrapper = mount(<Dishes menu={restaurants[0].menu} />)

      wrapper.find(`div[data-automation-id="DISH_BLOCK_${secondDish.id}"]`)
      expect(
        wrapper
          .find('h4[data-automation-id="DISH_NAME"]')
          .first()
          .text()
      ).toBe(secondDish.name)
    })

    it('should render price', () => {
      const secondDish = restaurants[0].menu[0]
      const wrapper = mount(<Dishes menu={restaurants[0].menu} />)

      wrapper.find(`div[data-automation-id="DISH_BLOCK_${secondDish.id}"]`)
      expect(
        wrapper
          .find('span[data-automation-id="DISH_PRICE"]')
          .first()
          .text()
      ).toBe(secondDish.price + '')
    })
  })
})
