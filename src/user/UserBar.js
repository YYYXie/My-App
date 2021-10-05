import React from 'react'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'

export default function UserBar({user,dispatchUser}) {
  
  if (user) {
    console.log("logout user:" + user)
    return <Logout user={user} dispatchUser={dispatchUser} />
  } else {
    console.log("user:" + user)
    return (
      <>
        <Login dispatchUser={dispatchUser} />
        <Register dispatchUser={dispatchUser} />
      </>
    )
  }
}
