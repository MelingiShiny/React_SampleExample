import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    return (
        <div>
            <h1>User1</h1>
            <h1>User2</h1>
            <h1>User3</h1>
            <Outlet></Outlet>
            <div>
                <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
                <button onClick={()=>setSearchParams({})}>Reset Filter</button>
            </div>
            {
                showActiveUsers ?<h2>Showing active users</h2> : <h2>Showing all users</h2>
            }
        </div>

    )
}
