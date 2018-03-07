import React, {Component} from 'react';
import './App.css';
import TodoTable from "./TodoTable"
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {description: '', date: '', todos: []}
    }

    inputChanged = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    dateChanged = (event, date) => {
        this.setState({date: date});
    }
    addTodo = (event) => {
        event.preventDefault();
        const strDate = this.state.date.getDate() + '.' + (this.state.date.getMonth() + 1) + '.' + this.state.date.getFullYear();
        const newTodo = {description: this.state.description, date: strDate};
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    removeToDo= (todo, index) => {
        this.setState({
            todos: this.state.todos.filter((todo, i) => i !== index)
        })
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Simple Todolist</h2>
                </div>
                <div>
                    <form>
                        Description:<br/>
                        <TextField hintText="Description" name="description" onChange={this.inputChanged}
                                   value={this.state.description}/><br/>
                        Date:<br/>
                        <DatePicker hintText="Duedate" name="date" onChange={this.dateChanged} value={this.state.date}/>
                        <RaisedButton onClick={this.addTodo} primary={true}
                                      label=
                                          "Add"/>
                    </form>
                </div>
                <div>

                    <TodoTable todos={this.state.todos} removeToDo={this.removeToDo}/>
                </div>
            </div>
        );
    }
}

export default App;
