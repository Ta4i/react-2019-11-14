import React, {Component} from 'react'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import Counter from '../counter'

class App extends Component {
  render() {
    const {restaurants} = this.props
    return (
      <Provider store={store}>
        <div>
          <Layout>
            <Header />
            <Counter />
            <Layout.Content>
              <Restaurants restaurants={restaurants} />
            </Layout.Content>
          </Layout>
        </div>
      </Provider>
    )
  }
}

export default App
