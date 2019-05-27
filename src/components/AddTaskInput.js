import React from 'react';

class AddTaskInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.inputChange(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitForm();
    }
    
    render () {
        return (
            <form className="toDoApp__add-task-form" onSubmit={this.handleSubmit}>
                <input value={this.props.task} onChange={this.handleChange}/>
                <button>Add</button>
            </form>
        )
    }
}

export default AddTaskInput;
