import React from 'react'
import Loadable from 'react-loadable'
const Loading = () => <div>Loading...</div>
const page = name =>
  Loadable({
    loader: () => import(`../${name}`),
    loading: Loading
    // delay: 200,
    // timeout: 10000
  })
console.dir(page('personalCenter/userMsg'))

const routeConfig = [
  {
    path: '/admin/news/history',
    component: page('News/history.tsx'),
    exact: true,
    strict: true
  },
  {
    path: '/admin/news/star',
    component: page('News/star.tsx')
  }
]
export default routeConfig
