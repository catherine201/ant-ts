import React, { useState, useEffect } from 'react'

const NotMatch = () => {
  useEffect(() => {
    console.log('componentDidMount: 组件加载后')
    // loading.start()
    return () => {
      console.log('componentWillUnmount: 组件卸载， 做一些清理工作')
    }
  }, [])

  useEffect(() => {
    console.log('componentDidUpdate： 更新usernmae')
  }, [])

  return <div>404</div>
}
export default NotMatch
