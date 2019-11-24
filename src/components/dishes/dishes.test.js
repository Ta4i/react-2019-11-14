import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dishes from './dishes'
import Dish from '../dish'
import {restaurants} from '../../fixtures'

configure({adapter: new Adapter()})

const mockMenu = restaurants[0].menu

describe('Dishes', () => {
  it('should work', () => {
    const wrapper = mount(<Dishes menu={mockMenu} />)

    expect(wrapper.find('div[data-automation-id="DISHES"]').length).toBe(1)
  })

  it('should display all dishes', () => {
    const wrapper = mount(<Dishes menu={mockMenu} />)

    expect(wrapper.find(Dish).length).toBe(mockMenu.length)
  })
})
