import React, {Component} from 'react'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import Counter from '../counter'
import AllOrder from '../all-order'

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
            <AllOrder />
          </Layout>
        </div>
      </Provider>
    )
  }
}

export default App
