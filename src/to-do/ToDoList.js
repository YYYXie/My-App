import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserBar from '../user/UserBar';
import { Redirect, useHistory, withRouter } from "react-router-dom";

class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state={
            newItem:"",
            list:[],
            check: false,
            dateValue: ""
        }

        //this.routeChange = this.routeChange.bind(this);
    }

    updateInput(key, value){
        this.setState({
            [key]: value
        });
    }

    addItem(){
        const newItem={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        //console.log("add");
        const list = [...this.state.list];

        list.push(newItem);
        
        this.setState({
            list,
            newItem:""
        });
    }

    deleteItem(id){
        const list = [...this.state.list];

        const updateList = list.filter(item => item.id !== id);
        this.setState({ list: updateList });
    }

    routeChange() {
        let path = "../user/UserBar";
        this.props.history.push(path);
    }
    
    checkedBox() {
        if (this.state.check){
            console.log("uncheck");
            this.state.check = false;
            this.setState({ dateValue: "" });
        }
        else{
            console.log("check");
            this.state.check = true;
            //this.state.dateValue = Date.now();
            var todayDate = new Date().toISOString().slice(0, 10);
            this.setState({ dateValue: todayDate });
            console.log(this.state.dateValue)
        };
    }
    

    render() {
        const { match, location, history } = this.props;
        return (
            <div ClassName="ToDoList">
                <button onClick={() => this.routeChange()}>Logout</button>
                <div>
                    <from>
                        <div class="container">
                            <div class="input-group col-lg-12 mb-4">
                                <input id="title" name="title" placeholder="title" />
                                <input id="description" description="title" placeholder="description" />
                                <input id="dateCreated" type="date" description="dateCreated" placeholder="dateCreated" />
                                <input id="complete" type="checkbox" onChange={() => this.checkedBox()} description="complete" />
                                <input id="dateCreated" type="date" description="dateCreated" placeholder="dateCreated" value={ this.state.dateValue }/>
                            </div>
                        </div>
                    </from>
                    <button onClick={() => this.addItem()}>
                        Add
                    </button>
                    <br />
                    <br />
                    <ul>
                        {this.state.list.map(item => {
                            return(
                                <li key={item.id}>
                                    {item.value}
                                    <button onClick={() => this.deleteItem(item.id)}>
                                        X
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    };
}

export default ToDoList;