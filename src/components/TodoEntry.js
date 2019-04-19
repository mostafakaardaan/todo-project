import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoEntry extends Component {
  state = {
    value: ""
  };
  handlekeyDown = event => {
    if (event.keyCode !== 13) {
      return;
    }
    todoStore.addTodo(this.state.value);
    this.setState({
      value: ""
    });
  };

  render() {
    /*   var main;
    var todos = todoStore.todos;
    var activeTodoCount = todos.reduce(function(accum, todo) {
      return todo.completed ? accum : accum + 1;
    }, 0);
    if (todos.length) {
      main = (
        <section class="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={this.allToggle}
            checked={activeTodoCount === 0}
          />
          <label htmlFor="toggle-all" />
         
        </section>
      );
    } */
    return (
      <div>
        <header class="header">
          <h1>Todos</h1>

          <input
            id="place"
            className="new-todo"
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            onKeyDown={event => this.handlekeyDown(event)}
            type="text"
            placeholder="What needs to be done?"
            autofocus
          />
        </header>
        {/* {main} */}
      </div>
    );
  }
}
export default TodoEntry;
