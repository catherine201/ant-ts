import React from 'react'
// IndexRoute 在router4之后就被抛弃了
import { Router, Route } from 'react-router'
import { createHashHistory } from 'history'
import routeConfig from '@/routes/index.js'

const generateRoute = (routeConfig: any) => {
  let items = []
  items = routeConfig.map((item: any, index: number) => {
    if (Array.isArray(item.childRoutes)) {
      return (
        <React.Fragment key={index}>
          {/* {item.indexRoute ? <IndexRoute component={item.component} /> : ''} */}
          <Route path={item.path} component={item.component}>
            {generateRoute(item.childRoutes)}
          </Route>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment key={index}>
        {/* {item.indexRoute ? <IndexRoute component={item.component} /> : ''} */}
        <Route path={item.path} component={item.component} />
      </React.Fragment>
    )
  })
  console.dir(items)
  return items
}

const RouterConfig = () => {
  return <Router history={createHashHistory()}>{generateRoute(routeConfig)}</Router>
}
const ex = RouterConfig()
export default ex
