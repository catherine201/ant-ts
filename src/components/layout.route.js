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
  { path: '/admin/mine', component: page('Mine/index.tsx'), auth: false },
  {
    path: '/admin/news',
    component: page('News')
  },
  {
    path: '/admin/404',
    component: page('notMatch/index.tsx')
  }
]
export default routeConfig
