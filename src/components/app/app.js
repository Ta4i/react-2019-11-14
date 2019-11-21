import React, {Component} from 'react'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import styles from './app.module.css'

class App extends Component {
  render() {
    const {restaurants} = this.props
    return (
      <div className={styles.app}>
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

export default App
