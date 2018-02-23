
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
    constructor(props){
      super(props);
      this.state={description:'',date:'', todos:[]}

    }

    inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
    }

    addTodo = (event) => {
      event.preventDefault();
      this.setState({
        todos: [...this.state.todos,{description:this.state.description,
        date:this.state.date}]
      });
    }

  render() {
    return (
         <div className="App">

           <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h2 className="App-title">Simple to do list</h2>
           </header>



           <div className="inputTodo">
             <p>Add todo</p>
             <form onSubmit={this.addTodo}>
               <label>Description:</label>
               <input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/>
               <label>Date:</label>
               <input type="text" name="date" onChange={this.inputChanged} value={this.state.date}/>
               <input type="submit" value="Add"/>
             </form>
           </div>
           <table>
             <tr>
               <th>Date</th>
               <th>Description</th>
             </tr>
             {this.state.todos.map( ( item, index ) =>
               <tr key={ index }>
                 <td> { item.date }</td>
                 <td> { item.description }</td>
               </tr>
             )}
           </table>
         </div>
    );
  }
}

export default App;
