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
  loader: () => import(`@/components/layout.js`),
  loading: Loading
})
console.dir(page('Mine/index.tsx'))
const routeConfig = [
  { path: '/', exact: true, strict: true, component: page('Dashboard/index.tsx') },
  {
    path: '/admin',
    component: Layout,
    // exact: true,
    // strict: true,
    childRoutes: [
      { path: '/admin/mine', component: page('Mine/index.tsx'), exact: true, strict: true },
      {
        path: '/admin/news',
        component: page('News'),
        // strict: true,
        // exact: true,
        childRoutes: [
          {
            path: '/admin/news/history',
            component: page('News/history.tsx'),
            exact: true,
            strict: true
          },
          {
            path: '/admin/news/star/:id',
            component: page('News/star.tsx'),
            exact: true,
            strict: true
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    component: page('login/index.tsx'),
    exact: true
  }
  // {
  //   path: '/404',
  //   component: page('notMatch/index.tsx')
  // }
]
export default routeConfig
