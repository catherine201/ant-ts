import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import styles from '@/App.module.less'

// class App extends Component {
//   public render() {
//     return (
//       <div className={styles.App}>
//         <Button type="primary">Button</Button>
//       </div>
//     )
//   }
// }

// export default App

export const App = () => {
  const [state, setState] = useState({ ...state, username: 'scq000' })
  const [myName, setMyName] = useState('catherine')

  useEffect(() => {
    console.log('componentDidMount: 组件加载后')
    return () => {
      console.log('componentWillUnmount: 组件卸载， 做一些清理工作')
    }
  }, [])

  useEffect(() => {
    console.log('componentDidUpdate： 更新usernmae')
  }, [state.username])

  return (
    <div className={styles.App}>
      <p>Welcome to homepage. {state.username}</p>
      <p>Welcome. {state.myName}</p>
      <input
        type="text"
        placeholder="input a username"
        onChange={event => setState({ username: event.target.value })}
      />
      <Button type="primary">Button</Button>
    </div>
  )
}
