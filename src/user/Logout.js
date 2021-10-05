import React from 'react'
import * as Icon from 'react-feather';

export default function Logout({user, dispatchUser}) {
  return (
    <form onSubmit={e => {e.preventDefault(); dispatchUser({type:"LOGOUT"}) } }>
      <h3>Logout Here</h3>
      <div class="input-group col-lg-12 mb-0">
        <span>
          <Icon.User />
        </span>
        <div>
          Logged in as: <b>{user}</b>
        </div>
      </div>
      <input type="submit" value="Logout" />
    </form>
    )
 }
 
