import React, { Component } from "react";
import TodoItemss from "./components/TodoItems/TodoItems";
import AddItemsss from "./components/AddItems/AddItem";


class App extends Component {
  state ={
    items:[
      {id:1,name:'hamza',age:22},
      {id:2,name:'ahmed',age:21},
      {id:3,name:'abdo',age:20},
      {id:4,name:'ali',age:56},
      {id:5,name:'mohamed',age:789},
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(items => {
      return items.id !== id 
    })
    this.setState({items});
  }

  addItem = (item) => {
    item.id = Math.random();
    let items= this.state.items;
    items.push(item);
    this.setState ({items});
  }
  render () {
  return (
    <div className="App container">
      <h1 className="text-center">Todo App</h1>
      <TodoItemss items = {this.state.items} deleteItem = {this.deleteItem} />
      <AddItemsss addItem={this.addItem}/>
    </div>
  ); 
  
}
}
export default App;
