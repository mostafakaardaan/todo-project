import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

let i = {};

@observer
class TodoItems extends Component {
  render() {
    return (
      <section className="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <ul className="todo-list">
          {todoStore.todos.map(todo => {
            return <TodoItem todo={todo} key={i} />;
          })}
        </ul>
      </section>
    );
  }
}
export default TodoItems;
