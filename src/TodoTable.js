import React, {Component} from "react"
import "./App.css"

class TodoTable extends Component {
    render() {
        return (
            <div className="App">
                <table>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.todos.map((item, index) => (
                        <tr>
                            <td> {item.date}</td>
                            <td> {item.description}</td>
                            <td>
                                <button
                                    id={index}
                                    onClick={() => {
                                        this.props.removeToDo(item, index)
                                    }}
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
