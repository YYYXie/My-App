import logo from './logo.svg';
import './App.css';
import UserBar from './user/UserBar';
import ToDoList from './to-do/ToDoList';
import { Redirect, useHistory, withRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
              <ToDoList />
            </header>
        </div>
    );
}

export default App;
