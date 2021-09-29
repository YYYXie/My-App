import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-feather';
import { useHistory, withRouter } from 'react-router-dom';


export default function Login() {

    const history = useHistory();

    const handleClick = () => {
        history.push("../to-do/ToDoList");
    }

    return (
        <form onSubmit={evt => evt.preventDefault()}>
            <h1 class="h3 mb-3 fw-normal">Login Here</h1>
            <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-gray px-4 border-md border-right-0" >
                        <Icon.User />
                    </span>
                </div>
                <input id="email" type="email" name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md" />
            </div>
            <div class="input-group col-lg-12 mb-4">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-gray px-4 border-md border-right-0">
                        <Icon.Lock />
                    </span>
                </div>
                <input id="password" type="password" name="password" placeholder="password" class="form-control bg-white border-left-0 border-md" /> 
            </div>
            <div class="d-grid gap-2 d-md-flex">
                <button onClick={()=> handleClick()} class="btn btn-primary" type="submit">Login</button>
                <button class="btn btn-primary" type="submit">Register</button>
            </div>
        </form>
    )
}
