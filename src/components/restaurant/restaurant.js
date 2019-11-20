import React from 'react'
import Dishes from '../dishes'
import Reviews from '../reviews'
import AverageRating from '../average-rate'
import {Layout, Divider, Typography} from 'antd'
const {Content, Sider} = Layout

function Restaurant(props) {
  const {name, menu, reviews, id} = props

  return (
    <Layout className="layout" style={{padding: '50px'}}>
      <Sider width={500} style={{background: '#fff', padding: '50px'}}>
        <Typography.Title level={2} style={{textAlign: 'center'}}>
          {name}
          <AverageRating id={id} reviews={reviews} />
        </Typography.Title>
        <Divider>Reviews</Divider>
        <Reviews reviews={reviews} />
      </Sider>
      <Content style={{padding: '0 50px'}}>
        <div style={{background: '#fff', padding: 24, minHeight: 280}}>
          <Dishes menu={menu} />
        </div>
      </Content>
    </Layout>
  )
}

export default Restaurant
