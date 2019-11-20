import React, {useState} from 'react'
import {Layout, Menu, Typography} from 'antd'
import Restaurant from '../restaurant'
import './restaurants.css'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )

  const restaurantsList = (
    <Menu defaultSelectedKeys={[currentId]}>
      {props.restaurants.map(restaurant => (
        <Menu.Item
          key={restaurant.id}
          onClick={() => setCurrentId(restaurant.id)}
        >
          {restaurant.name}
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Layout>
      <Layout.Sider className="restaurants-sider" width="250">
        <Layout>
          <Layout.Header className="restaurants-header">
            <Typography.Title level={2}>Restaurants</Typography.Title>
          </Layout.Header>
          <Layout.Content>{restaurantsList}</Layout.Content>
        </Layout>
      </Layout.Sider>
      <Layout.Content className="restaurants-content">
        <Restaurant restaurant={restaurant} />
      </Layout.Content>
    </Layout>
  )
}

export default Restaurants
