import React, {useState} from 'react'
import Restaurant from '../restaurant'
import {Layout, Menu} from 'antd'
const {Header} = Layout

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
          >
            {props.restaurants.map(restaurant => {
              return (
                <Menu.Item
                  key={restaurant.id}
                  onClick={() => setCurrentId(restaurant.id)}
                >
                  {restaurant.name}
                </Menu.Item>
              )
            })}
          </Menu>
        </Header>
      </Layout>
      <Restaurant {...restaurant} />
    </div>
  )
}

export default Restaurants
