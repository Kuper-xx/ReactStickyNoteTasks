import React, { Component } from 'react';
import './App.css';
import './components/bootstrap.min.css';
//json de tasks
import tasks from './sample/tasks.json';
//Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Creditos from './components/Creditos';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

  class App extends Component{
    state = {
      tasks: tasks
    }
    addTask = (title, description) => {
      const newTask = {
        title: title,
        description: description,
        id: this.state.tasks.length
      }
      this.setState({
        tasks: [...this.state.tasks, newTask]
      })
    }
    deleteTask = (id) => {
      const newTask = this.state.tasks.filter(task => task.id !== id);
      this.setState({
          tasks : newTask
      });
    } 
    checkTask = id => {
      const newTask = this.state.tasks.map(task => {
        if(task.id === id){
          task.done = !task.done  
        }
        return task;
      })
      this.setState({
        tasks : newTask
      })
    }
    render(){
      return <div>
        <Router>
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Credits">Credits</Link>
        </li>
        </ul>
          <Route exact path="/" render={() =>{
    return  <div>
            <TaskForm addTask={this.addTask}/>
            <Tasks 
            tasks={this.state.tasks} 
            deleteTask={this.deleteTask} 
            checkTask={this.checkTask}/>
            </div>
          }}>
          </Route>
          <Route path="/Credits" component={Creditos} /> 
        </Router>
              </div>
      
    }
  }
export default App;
