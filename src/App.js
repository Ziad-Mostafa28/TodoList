import React, { Component } from "react";
import TodoItemss from "./components/TodoItems/TodoItems";


class App extends Component {
  state ={
    item:[
      {id:1,name:'hamza',age:22},
      {id:2,name:'ahmed',age:21},
      {id:3,name:'abdo',age:20},
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
