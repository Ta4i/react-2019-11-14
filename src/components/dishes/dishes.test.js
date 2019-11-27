import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dishes from './dishes'
import Dish from '../dish'
import {restaurants} from '../../fixtures'

configure({adapter: new Adapter()})

const fixtureMenu = restaurants[1].menu

describe('Dishes', () => {
  it('should work', () => {
    const wrapper = mount(<Dishes menu={fixtureMenu} />)
    //примонтировали Dishes
    expect(wrapper.find('div[data-automation-id="DISHES"]').length).toBe(1)
    //находим div[data-automation-id="DISHES"]
  })

  it('show all dishes', () => {
    const wrapper = mount(<Dishes menu={fixtureMenu} />)

    expect(wrapper.find(Dish).length).toBe(fixtureMenu.length)
  })
})
