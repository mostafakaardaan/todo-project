import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";

@observer
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.Omit = this.Omit.bind(this);
  }
  Omit() {
    todoStore.todoRemover(this.props.todo.id);
  }
  onToggle = () => {
    this.props.todo.toggle();
  };
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            onClick={this.onToggle}
            className="toggle"
            value="on"
            type="checkbox"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button className="destroy" onClick={this.Omit} />
        </div>
      </li>
    );
  }
}
export default TodoItem;
