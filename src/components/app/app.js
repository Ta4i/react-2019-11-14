import React, {Component} from 'react'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Counter from '../counter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Layout>
              <Header />
              <Layout.Content>
                <Route path="/counter" component={Counter} />
                <Route
                  path="/restaurants"
                  render={() => {
                    return <Restaurants />
                  }}
                />
              </Layout.Content>
            </Layout>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
