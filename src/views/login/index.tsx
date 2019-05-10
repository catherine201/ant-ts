import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const Login = (props: any) => {
  useEffect(() => {
    console.log('componentDidMount: 组件加载后')
    // loading.start()
    //init()
    return () => {
      console.log('componentWillUnmount: 组件卸载， 做一些清理工作')
    }
  }, [])

  useEffect(() => {
    console.log('componentDidUpdate： 更新usernmae')
  }, [])

  const handleLogin = () => {
    sessionStorage.setItem('isLogin', JSON.stringify(true))
    console.log(props)
    props.history.push('/admin')
  }

  return (
    <div>
      <button
        onClick={() => {
          handleLogin()
        }}
      >
        login
      </button>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  test: state.demo.test
})

const mapDispatchToProps = (dispatch: any) => ({
  getTest: dispatch.demo.getTest
})
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
