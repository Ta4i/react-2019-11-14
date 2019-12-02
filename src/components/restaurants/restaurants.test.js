import React from 'react'
import {mount} from 'enzyme'
import Restaurants from './restaurants'
import {restaurants} from '../../fixtures'

describe('Restaurant', () => {
  it('should work', () => {
    const wrapper = mount(<Restaurants restaurants={restaurants} />)

    expect(wrapper.find('div[data-automation-id="RESTAURANTS"]').length).toBe(1)
  })

  it('should fetch data if possible', function(done) {
    mount(
      <Restaurants restaurants={restaurants} fetchRestaurants={() => done()} />
    )
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
          .find('h2[data-automation-id="RESTAURANT_NAME"]')
          .first()
          .text()
      ).toBe(secondRestaurant.name)
    })
  })
})
