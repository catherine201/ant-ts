import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import NotMatch from '@/views/notMatch/index.tsx'

// const isExactHandle = (pathname, route) => {
//   if (pathname === route.path) {
//     return true
//   } else {
//     if (route.childRoutes) {
//       route.childRoutes.map((item) => {
//         isExactHandle(pathname, item)
//       })
//     }
//   }
// }

export const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      exact={route.exact || false}
      // exact={true}
      // strict={true}
      strict={route.strict || false}
      render={(props: any) => <route.component {...props} routes={route.childRoutes} />}
    />
  )
}
const GenerateRoute = (props: any) => {
  return (
    <React.Fragment>
      <Switch>
        {props.config
          .map((route: any, i: number) => {
            return <RouteWithSubRoutes key={i} {...route} />
          })
          .reverse()}
        {<Route component={NotMatch} />}
      </Switch>
    </React.Fragment>
  )
}

export default withRouter(GenerateRoute)
