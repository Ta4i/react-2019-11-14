import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Restaurants from './restaurants'
import {restaurants} from '../../fixtures'

configure({adapter: new Adapter()})

describe('Restaurant', () => {
  it('should work', () => {
    const wrapper = mount(<Restaurants restaurants={restaurants} />)

    expect(wrapper.find('div[data-automation-id="RESTAURANTS"]').length).toBe(1)
  })

  describe('when Restaurant navigation clicked', function() {
    it('should render selected Restaurant', () => {
      const secondRestaurant = restaurants[1]
      const wrapper = mount(<Restaurants restaurants={restaurants} />)
      wrapper
        .find(
          `span[data-automation-id="RESTAURANT_NAVIGATION_${
            secondRestaurant.id
          }"]`
        )
        .simulate('click')
      expect(
        wrapper
          .find('div[data-automation-id="RESTAURANT_NAME"]')
          .first()
          .text()
      ).toBe(restaurants[1].name)
    })
  })
})
