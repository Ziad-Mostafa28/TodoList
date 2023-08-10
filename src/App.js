import React, { Component } from "react";
import TodoItemss from "./components/TodoItems/TodoItems";


class App extends Component {
  state ={
    item:[
      {id:1,name:'hamza',age:22},
      {id:2,name:'ahmed',age:21},
      {id:3,name:'abdo',age:20},
      {id:4,name:'ali',age:56},
      {id:5,name:'mohamed',age:789},
    ]
  }
  render () {
  return (
    <div className="App">
      Todo App
      <TodoItemss/>
    </div>
  );
  
}
}
export default App;
