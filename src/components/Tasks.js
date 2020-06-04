import React, { Component } from 'react';
import Task from "./Task";
class Tasks extends Component{
   render(){ 
    return this.props.tasks.map(task => 
   <Task 
   task={task} 
   key={task.id} 
   checkTask={this.props.checkTask} 
   deleteTask={this.props.deleteTask}
   /> 
   )
  
        
   }
}
export default Tasks;