import { React, useContext } from 'react'
import * as Icon from 'react-feather';
import { stateContext } from '../contexts/context'

export default function Logout() {

  const { state, dispatch } = useContext(stateContext)
  const { user } = state;

  return (
    <form onSubmit={e => {e.preventDefault(); dispatch({type:"LOGOUT"}) } }>
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
 
