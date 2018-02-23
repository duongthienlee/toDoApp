import React, {Component} from "react"
import "./App.css"
class TodoTable extends Component {
  constructor(props) {
    super(props)
  }
  removeItem(item, index) {
    this.props.removeToDo(item, index)
  }
  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map((item, index) => (
              <tr key={index}>
                <td> {item.date}</td>
                <td> {item.description}</td>
                <td>
                  <button
                    onClick={() => {
                      this.removeItem(item, index)
                    }}
                    key={index}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TodoTable
