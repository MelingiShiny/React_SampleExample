import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const NestedRoute = () => {
  return (
    <>
   <div>
    <input type="search" placeholder='Search'></input>
   </div>
   <nav>
    <Link to="featured">Featured</Link>
    <Link to="new">New</Link>
    </nav>
    <Outlet />
   </>
  )
}
