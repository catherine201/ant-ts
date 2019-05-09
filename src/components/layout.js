import React from 'react'
import WrappedRoute from './WrapRoute.js'
const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
    </div>
  )
}
// 需要嵌套路由就使用WrappedRoute 这个高阶组件
export default WrappedRoute(Layout)
