import React from 'react';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleDelete(i) {
        this.props.deleteTask(i);
    }
    handleCompleteToggle(i) {
        this.props.completeTaskToggle(i);
    }
    handleEditToggle(i) {
        this.props.editTaskToggle(i);
    }
    handleInput = i => e => {
        this.props.editTask(i, e.target.value);
    }

    render() {
        let taskList = this.props.taskList.map( (x,i) => 
            <li key={i}>
                {/* Complete Button */}
                <button className={x.isComplete ? 'greenButton' : ''} onClick={() => this.handleCompleteToggle(i)}><i className="far fa-thumbs-up"></i></button>
                {/* Task / Task Input */}
                {!x.isEditing ? <p className={x.isComplete ? 'completeText' : ''}>{x.task}</p> : <input className={x.isComplete ? 'completeText' : ''} onChange={this.handleInput(i)} defaultValue={x.task}/>}
                {/* Edit Button */}
                <button className={x.isEditing ? 'greenButton' : ''} onClick={() => this.handleEditToggle(i)}><i className="far fa-edit"></i></button>
                {/* Delete Button */}
                <button onClick={() => this.handleDelete(i)}><i className="far fa-trash-alt"></i></button>
            </li>)
        return (
            <ul className="toDoApp__task-list">
                {taskList}
            </ul>
        )
    }
}

export default TaskList;