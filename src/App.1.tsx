import React, { Component } from 'react'
import { Button } from 'antd'
import styles from '@/App.module.less'

class App extends Component {
  public render() {
    return (
      <div className={styles.App}>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default App
