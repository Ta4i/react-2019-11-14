import React, {useState} from 'react'
import Restaurant from '../restaurant'
import {restaurants} from '../../fixtures'
import {Rate, Layout, Typography, Tabs} from 'antd'

const {TabPane} = Tabs
const { Header, Footer, Sider, Content } = Layout

function Restaurants(props) {
  
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  

  return (

          <div className="card-container">
         
            <Tabs defaultActiveKey="1" type="card">
              {restaurants.map(restaurant => {
                return (
                  <TabPane
                    tab={restaurant.name}
                    key={restaurant.id}
                    onClick={() => setCurrentId(restaurant.id)}
                  >
                    <Restaurant restaurants={restaurants} currentId={currentId} setCurrentId={setCurrentId} restaurant={restaurant} />
                  </TabPane>
                  )
                })}
              </Tabs>
            
          </div>
                    
  )
}

export default Restaurants
