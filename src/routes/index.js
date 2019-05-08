import React from 'react'
import Loadable from 'react-loadable'
const Loading = () => <div>Loading...</div>
const page = name =>
  Loadable({
    loader: () => import(`../views/${name}`),
    loading: Loading
    // delay: 200,
    // timeout: 10000
  })
console.dir(page('personalCenter/userMsg'))

const Layout = Loadable({
  loader: () => import(`@/components/layout.tsx`),
  loading: Loading
})
console.dir(page('Mine/index.tsx'))
const routeConfig = [
  {
    path: '/',
    component: Layout,
    indexRoute: { component: page('Dashboard/index.tsx') },
    childRoutes: [
      { path: 'mine', component: page('Mine/index.tsx') },
      {
        path: 'news',
        component: page('News'),
        childRoutes: [
          { path: '/history/:id', component: page('News/history.tsx') },
          { path: '/star/:id', component: page('News/star.tsx') },
          {
            path: 'history/:id',
            onEnter: function(nextState, replaceState) {
              replaceState(null, '/history/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  }
]
export default routeConfig
