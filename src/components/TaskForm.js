import React, { Component } from 'react';
import './TaskForm.css';
import './bootstrap.min.css'
class TaskForm extends Component{
    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        console.log("Submiting")
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }
    onChange = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        
        return (
            <form onSubmit={this.onSubmit}>
                <br />
                <div className="card text-white bg-warning mb-2" id="cartaT">
                <div className="card-header">
                    <input id="txtIp"  type="text" autocomplete="off" placeholder="Write a Task" onChange={this.onChange} value={this.state.title} name="title"/>
                    </div>
                <div className="card-body">
                    <textarea id="textArea" className="form-control" placeholder="Write a description" onChange={this.onChange} value={this.state.description} name="description"></textarea>
                 </div>
                </div>
                <br />
                <button className="btn btn-primary" id="btn" type="submit">
                    Save Task
                    </button>
            </form>
        )
    }
}

export default TaskForm;