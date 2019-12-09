import React, {Component} from 'react'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import RestaurantPage from '../../routes/restaurant-page'
import CounterPage from '../../routes/counter-page'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Layout>
              <Header />
              <Layout.Content>
                <Switch>
                  <Route path="/counter" component={CounterPage} />
                  <Route path="/restaurant" component={RestaurantPage} />
                  <Route path="/" render={() => <h1>Page not found</h1>} />
                </Switch>
              </Layout.Content>
            </Layout>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
