import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import './TaskForm.css';
import './bootstrap.min.css';
    class Task extends Component{
       StyleComplete(){
           return {
               fontSize: '18px',
               color: this.props.task.done ? 'red' : 'white',
               textDecoration: this.props.task.done ? 'line-through' : 'none'
           }
       }
       
        render(){
        const {task} = this.props;
                 return <div style={this.StyleComplete()}>
                     <hr className="hrB" />
                        {task.id} -
                        {task.done}
                            <br />
                            <div className="card text-white bg-warning mb-2" id="cartaTASK" style={this.StyleComplete()}>
                                <div className="card-header">
                                {task.done}
                                
                                <button onClick={this.props.deleteTask.bind(this, task.id)} className="close">X</button>
                                <input id="txtIpTASK"  type="text" value= {task.title} disabled/>   
                                </div>
                                <div className="card-bodyTASK">
                                    <textarea id="textArea" className="form-control" value= {task.description} disabled></textarea>
                                    <input onChange={this.props.checkTask.bind(this, task.id)} id="chkTASK" className="" type="checkbox"/>
                                    
                                </div>
                            </div>
            <hr className="hrB" />
        </div>
        }
    }
    Task.propTypes = {
        task : PropTypes.object.isRequired
    }

export default Task; 