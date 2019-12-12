import React, {Component} from 'react'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'
import RestaurantPage from '../../routes/restaurant-page'
import CounterPage from '../../routes/counter-page'
import OrderPage from '../../routes/order-page'
import OrderComplete from '../../routes/order-complete'
import {ConnectedRouter} from 'connected-react-router'
import {history} from '../../store/history'
import {Provider as UserProvider} from '../../contexts/user'

class App extends Component {
  state = {
    userName: 'foo bar',
  }

  handleUserNameChange = userName => {
    this.setState({
      userName,
    })
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <UserProvider value={this.state.userName}>
            <div>
              <Layout>
                <Header />
                <Layout.Content>
                  <Switch>
                    <Route
                      path="/counter"
                      exact
                      strict
                      component={CounterPage}
                    />
                    <Route path="/restaurant" component={RestaurantPage} />
                    <Route
                      path="/order"
                      render={() => (
                        <OrderPage
                          onUserNameChange={this.handleUserNameChange}
                        />
                      )}
                    />
                    <Route path="/order-complete" component={OrderComplete} />
                    <Route path="/404" render={() => <h1>404</h1>} />
                    <Redirect from={'/'} to={'/restaurant'} />
                    <Route path="/" render={() => <h1>Page not found</h1>} />
                  </Switch>
                </Layout.Content>
              </Layout>
            </div>
          </UserProvider>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
