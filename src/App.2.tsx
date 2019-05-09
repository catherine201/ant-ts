import React from 'react'
import RouterConfig from '@/components/routerConfig.tsx'

// export const App = (props: any) => {
//   return (
//     <div>
//       app
//       <RouterConfig />
//       {props.children}
//     </div>
//   )
// }

export class App extends React.Component {
  public render() {
    return <RouterConfig />
  }
}
