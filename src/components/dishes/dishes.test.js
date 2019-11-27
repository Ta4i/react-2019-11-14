import React from 'react'
import {mount} from 'enzyme'
import Dishes from './dishes'
import {restaurants} from '../../fixtures'

const dishes = restaurants[0].menu

describe('Dishes', function() {
  it('should render all menu items', function() {
    const wrapper = mount(<Dishes menu={dishes} />)
    expect(wrapper.find('div[data-automation-id="DISH"]').length).toBe(3)
  })

  describe('when increase number of one dish', function() {
    it('the dish should show more items', () => {
      const wrapper = mount(<Dishes menu={dishes} />)

      wrapper
        .find('button[data-automation-id="INCREASE"]')
        .first()
        .simulate('click')
        .simulate('click')
      expect(
        wrapper
          .find('[data-automation-id="AMOUNT"]')
          .first()
          .text()
      ).toBe('2')
    })
    it('other dishes should not be affected', () => {
      const wrapper = mount(<Dishes menu={dishes} />)

      wrapper
        .find('button[data-automation-id="INCREASE"]')
        .first()
        .simulate('click')
        .simulate('click')
      expect(
        wrapper
          .find('[data-automation-id="AMOUNT"]')
          .at(1)
          .text()
      ).toBe('0')
      expect(
        wrapper
          .find('[data-automation-id="AMOUNT"]')
          .at(2)
          .text()
      ).toBe('0')
    })
  })
})
