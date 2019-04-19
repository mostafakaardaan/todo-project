import React, { Component } from "react";
import { observer } from "mobx-react";
import TodoEntry from "./components/TodoEntry";
import "./App.css";
import TodoItems from "./components/TodoItems";
import TodoFooter from "./components/TodoFooter";

@observer
class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems />
        <TodoFooter />
      </div>
    );
  }
}

export default App;
