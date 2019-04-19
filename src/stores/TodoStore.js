import { observable, action } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  lastId = 0;
  @observable todosBCK = [];

  @action
  addTodo(title) {
    this.todos = this.todosBCK;
    this.todos.push(new TodoModel(this, title, false, this.lastId++, false));
    this.todosBCK = this.todos;
  }

  @action
  todoRemover(idd) {
    this.todosBCK.remove(this.todosBCK[idd]);
    this.lastId = this.lastId - 1;
    this.todosBCK.forEach(todo => {
      if (todo.id > idd) {
        todo.id = todo.id - 1;
      } else if (todo.id < idd) {
        todo.id = todo.id;
      }
    });
    this.todos = this.todosBCK;
  }

  @action
  Active() {
    this.todos = this.todosBCK.filter(todo => todo.completed === false);
  }

  @action
  All() {
    this.todos = this.todosBCK;
  }

  @action
  Clear() {
    for (let i = 0; i < this.todosBCK.length; i++) {
      if (this.todosBCK[i].completed === true) {
        this.todosBCK.remove(this.todosBCK[i]);
        this.todosBCK.forEach(todo => {
          if (todo.id > i) {
            todo.id = todo.id - 1;
          } else if (todo.id < i) {
            todo.id = todo.id;
          }
        });
        this.lastId--;
        i--;
      }
    }
    this.todos = this.todosBCK;
  }

  @action
  Complete() {
    this.todos = this.todosBCK.filter(todo => todo.completed === true);
  }
}

const todoStore = new TodoStore();
export default todoStore;
