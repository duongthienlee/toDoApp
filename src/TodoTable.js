import React, {Component} from 'react'
import "./App.css"
import RaisedButton from 'material-ui/RaisedButton'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table'

class TodoTable extends Component {

    render() {
        return (
            <div className="App">
                <Table selectable={false}>
                    <TableHeader
                        displaySelectAll={false}>
                        <TableHeaderColumn>
                            Date
                        </TableHeaderColumn>
                        <TableHeaderColumn>
                            Description
                        </TableHeaderColumn>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.todos.map((item, index) =>
                            <TableRow key={index}>
                                <TableRowColumn>{item.date}</TableRowColumn>
                                <TableRowColumn>{item.description}</TableRowColumn>
                                <TableRowColumn>
                                    <RaisedButton
                                        onClick={() => {
                                            this.props.removeToDo(item, index)
                                        }}
                                        id={index}
                                        label="Delete"
                                    >

                                    </RaisedButton>
                                </TableRowColumn>
                            </TableRow>)}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default TodoTable
