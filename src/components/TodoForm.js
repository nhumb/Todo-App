import React from 'react';
import AddTaskInput from './AddTaskInput';
import TaskList from './TaskList';

class TodoForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        task: "",
        taskList: [{task: "Work Out", isEditing: false, isComplete: false},{task: "Cook Dinner", isEditing: false, isComplete: false},{task: "Washing", isEditing: false, isComplete: false}]
      }
      this.inputChange = this.inputChange.bind(this);
      this.addNewTask = this.addNewTask.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
      this.completeTaskToggle = this.completeTaskToggle.bind(this);
      this.editTaskToggle = this.editTaskToggle.bind(this);
      this.editTask = this.editTask.bind(this);
    }
    inputChange(newInput) {
      this.setState({
        task: newInput
      })
    }
    addNewTask() {
      if (this.state.task !== "") {
        this.setState((state) => ({
          task: "",
          taskList: state.taskList.concat({task: state.task, isEditing: false, isComplete: false})
        }))
      }
    }
    deleteTask(i) {
      this.setState((state) => ({
        taskList: state.taskList.slice(0,i).concat(state.taskList.slice(i+1))
      }))
    }
    completeTaskToggle(i) {
        let newTaskList = this.state.taskList;
        newTaskList[i].isComplete = !this.state.taskList[i].isComplete;
        this.setState({
            taskList: newTaskList 
        })
    }
    editTaskToggle(i) {
        let newTaskList = this.state.taskList;
        newTaskList[i].isEditing = !this.state.taskList[i].isEditing;
        this.setState({
            taskList: newTaskList
        })
    }
    editTask(i, newInput) {
      let newTaskList = this.state.taskList;
      newTaskList[i].task = newInput;
      this.setState({
          taskList: newTaskList 
      });
    }

    render () {
        return (
            <div>
                <AddTaskInput 
                  task={this.state.task} 
                  inputChange={this.inputChange} 
                  submitForm={this.addNewTask}
                />
                <TaskList 
                  taskList={this.state.taskList} 
                  deleteTask={this.deleteTask} 
                  completeTaskToggle={this.completeTaskToggle}
                  editTaskToggle={this.editTaskToggle}
                  editTask={this.editTask}
                />
            </div>
        )
    }
}

export default TodoForm;