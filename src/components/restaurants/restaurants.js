import React, {useState} from 'react'
import {Layout, Menu, Typography} from 'antd'
import Restaurant from '../restaurant'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  const {Header, Sider, Content} = Layout

  return (
    <Layout>
      <Header style={{background: '#fff', flexBasis: '100%'}}>
        <Typography.Title style={{margin: '.5em 0'}}>
          Restaurants
        </Typography.Title>
      </Header>
      <Content>
        <Layout>
          <Sider width={250} theme="light">
            <Menu mode={'vertical'} defaultSelectedKeys={[currentId]}>
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
          </Sider>
          <Content style={{background: '#fff', padding: '0 30px 50px'}}>
            <Restaurant restaurant={restaurant} />
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default Restaurants
