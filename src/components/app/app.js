import React, {Component} from 'react'
import Restaurants from '../restaurants'
import Order from '../order'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import Counter from '../counter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Layout>
            <Header />
            <Counter />
            <Layout.Content>
              <Restaurants />
            </Layout.Content>
            <Order />
          </Layout>
        </div>
      </Provider>
    )
  }
}

export default App
