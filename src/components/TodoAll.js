import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
export default class TodoAll extends Component {
  constructor(props) {
    super(props);

    this.allTodos = this.allTodos.bind(this);

    this.state = {
      selectedAll: true
    };
  }
  allTodos() {
    this.setState({
      selectedAll: true,
      selectedActive: false,
      selectedComplete: false
    });
    todoStore.All();
  }
  render() {
    return (
      <li onClick={this.allTodos}>
        <button>
          <a className={this.state.selectedAll ? "selected" : " "}> All</a>
        </button>
      </li>
    );
  }
}
