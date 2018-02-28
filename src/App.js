import React, {Component} from "react"
import "./App.css"
import TodoTable from "./TodoTable"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {description: "", date: "", todos: []}
    this.removeToDo = this.removeToDo.bind(this)
  }

  inputChanged = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  addTodo = event => {
    event.preventDefault()
    this.setState({
      todos: [
        ...this.state.todos,
        {
          description: this.state.description,
          date: this.state.date
        }
      ]
    })
  }

  removeToDo(todo, index) {
    this.setState({
      todos: this.state.todos.filter((todo, i) => i !== index)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Simple Todolist</h2>
        </header>

        <div className="inputTodo">
          <p>Add todo</p>
          <form onSubmit={this.addTodo}>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              onChange={this.inputChanged}
              value={this.state.description}
              placeholder="Description"
            />
            <label>Date:</label>
            <input
              type="text"
              name="date"
              onChange={this.inputChanged}
              value={this.state.date}
              placeholder="Date"
            />
            <input type="submit" value="Add" />
          </form>
        </div>
        <TodoTable todos={this.state.todos} removeToDo={this.removeToDo} />
      </div>
    )
  }
}

export default App
