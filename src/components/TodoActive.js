import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
export default class TodoActive extends Component {
  constructor(props) {
    super(props);
    this.activeTodos = this.activeTodos.bind(this);

    this.state = {
      selectedActive: false
    };
  }
  activeTodos() {
    this.setState({
      selectedActive: true,
      selectedAll: false,
      selectedComplete: false
    });

    todoStore.Active();
  }
  render() {
    return (
      <li onClick={this.activeTodos}>
        <button type="submit">
          <a className={this.state.selectedActive ? "selected" : " "}>
            {" "}
            Active
          </a>
        </button>
      </li>
    );
  }
}
