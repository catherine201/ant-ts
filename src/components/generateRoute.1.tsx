import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotMatch from '@/views/notMatch/index.tsx'

// const RouteWithSubRoutes = (route: any) => {
//   return <Route path={route.path} render={(props: any) => <route.component {...props} routes={route.childRoutes} />} />
// }
// const GenerateRoute = (props: any) => {
//   return (
//     <React.Fragment>
//       {props.config.map((route: any, i: number) => (
//         <RouteWithSubRoutes key={i} {...route} />
//       ))}
//     </React.Fragment>
//   )
// }

const generateRoute = (routeConfig: any) => {
  let items = []
  items = routeConfig.map((item: any, index: number) => {
    if (Array.isArray(item.childRoutes)) {
      return (
        <React.Fragment key={index}>
          {item.redirect ? (
            <Redirect to={item.to} />
          ) : (
            <Route
              path={item.path}
              component={item.component}
              exact={item.exact || false}
              strict={item.strict || false}
            />
          )}
          {generateRoute(item.childRoutes)}
        </React.Fragment>
      )
    }
    return (
      <React.Fragment key={index}>
        {item.redirect ? (
          <Redirect to={item.to} />
        ) : (
          <Route
            path={item.path}
            component={item.component}
            exact={item.exact || false}
            strict={item.strict || false}
          />
        )}
      </React.Fragment>
    )
  })
  console.dir(items)
  return items
}

const GenerateRoute = (props: any) => {
  return <React.Fragment>{generateRoute(props.config)}</React.Fragment>
}

export default GenerateRoute
