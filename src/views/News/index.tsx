import React from 'react'
import { Link } from 'react-router-dom'

const News = (props: any) => {
  return (
    <div>
      <h1>News</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
      </ul>
      {props.children}
    </div>
  )
}
export default News
