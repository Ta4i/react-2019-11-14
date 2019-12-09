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
                <Route path="/counter" exact component={Counter} />
                <Route
                  path="/:foo"
                  exact
                  render={options => console.log('😄', options)}
                />
                <Route
                  path="/restaurants/:id"
                  render={parameters => {
                    console.log(parameters)
                    return (
                      <Restaurants restaurantId={parameters.match.params.id} />
                    )
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
