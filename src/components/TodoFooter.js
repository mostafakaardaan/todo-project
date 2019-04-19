import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import ClearCompleted from "./TodoClearCompleted";
import TodoAll from "./TodoAll";
import TodoActive from "./TodoActive";
import TodoCompleted from "./TodoCompleted";

@observer
class TodoFooter extends Component {
  render() {
    if (todoStore.todosBCK.length > 0) {
      return (
        <div className="footer">
          <button className="todo-count">
            <span>
              {
                todoStore.todosBCK.filter(todo => todo.completed === false)
                  .length
              }
            </span>{" "}
            items left
          </button>
          <ul className="filters">
            <TodoAll />
            <TodoActive />
            <TodoCompleted />
          </ul>
          <ClearCompleted />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default TodoFooter;
