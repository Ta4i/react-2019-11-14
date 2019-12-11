import React, {Component} from 'react'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import RestaurantPage from '../../routes/restaurant-page'
import CounterPage from '../../routes/counter-page'
import OrderPage from '../../routes/order-page'
import GetOrderPage from '../../routes/getOrder-page'
import {Redirect} from 'react-router'
import {defaultRestaurantId} from '../../store/common'

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
                  <Route exact path="/">
                    <Redirect to={`/restaurant/${defaultRestaurantId}`} />
                  </Route>
                  <Route path="/counter" exact strict component={CounterPage} />
                  <Route path="/order" exact strict component={OrderPage} />
                  <Route
                    path="/getorder"
                    exact
                    strict
                    component={GetOrderPage}
                  />
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
