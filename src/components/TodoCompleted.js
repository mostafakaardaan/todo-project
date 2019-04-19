import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
export default class TodoCompleted extends Component {
  constructor(props) {
    super(props);

    this.completedTodos = this.completedTodos.bind(this);

    this.state = {
      selectedComplete: false
    };
  }

  completedTodos() {
    this.setState({
      selectedComplete: true,
      selectedAll: false,
      selectedActive: false
    });
    todoStore.Complete();
  }
  render() {
    return (
      <li onClick={this.completedTodos}>
        <button type="submit">
          <a className={this.state.selectedComplete ? "selected" : " "}>
            {" "}
            Completed
          </a>
        </button>
      </li>
    );
  }
}
