import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Restaurants from '../restaurants'
import Header from '../header'
import {Layout} from 'antd'
import './app.css'

class App extends Component {
  render() {
    const {restaurants} = this.props
    return (
      <div>
        <Layout>
          <Header />
          <Layout.Content>
            <Restaurants restaurants={restaurants} />
          </Layout.Content>
        </Layout>
      </div>
    )
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default App
