import React, { Component } from 'react'
import { RouteWithSubRoutes } from '@/components/generateRoute.tsx'
import { Switch, Route } from 'react-router-dom'
import NotMatch from '@/views/notMatch/index.tsx'
export default WrappedRoute => {
  class NewComponent extends Component {
    render() {
      return (
        <div>
          <WrappedRoute />
          <Switch>
            {this.props.routes
              .map((route, i) => {
                return <RouteWithSubRoutes key={i} {...route} />
              })
              .reverse()}
            {<Route component={NotMatch} />}
          </Switch>
        </div>
      )
    }
  }
  return NewComponent
}
