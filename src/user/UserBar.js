import { React, useContext } from 'react'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'
import { stateContext } from '../contexts/context'

// export default function UserBar({user,dispatchUser}) {
export default function UserBar() {
  
  const { state } = useContext(stateContext);

  if (state.user) {
    // console.log("logout user:" + state.user)
    return <Logout />
    // return <Logout user={user} dispatchUser={dispatch} />
  } else {
    // console.log("user:" + state.user)
    return (
      <>
        <Login />
        <Register />
        {/* <Login dispatchUser={dispatch} />
        <Register dispatchUser={dispatch} /> */}
      </>
    )
  }
}
