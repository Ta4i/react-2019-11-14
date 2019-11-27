import React, {Component} from 'react'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import PropTypes from 'prop-types'
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
          </Layout>
        </div>
      </Provider>
    )
  }
}
App.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      menu: PropTypes.array.isRequired,
    })
  ),
}

export default App
