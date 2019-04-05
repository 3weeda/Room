import React from "react";
import List from "./List/List";
import Form from "./Form/Form";
import classes from "./ToDoList.css";
import axios from "../../../../../axios-orders";

let todoItems = [];
let localTodoItems = JSON.parse(localStorage.getItem("localTodoItems"));
if (localTodoItems) {
  todoItems = localTodoItems;
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: todoItems };
  }
  addItem(todoItem) {
    let newTodo = {
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false,
      userId: this.props.userId
    };
    todoItems.unshift(newTodo);
    this.setState({ todoItems: todoItems });
    this.handlePostTodo(newTodo);
  }
  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
    //remove all then post remaining, TODO it properly
    this.handleDeleteTodo(itemIndex);
    todoItems.map(todo => {
      return this.handlePostTodo(todo);
    });
  }
  markTodoDone(itemIndex) {
    let todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }
  handleDeleteTodo(itemIndex) {
    axios
      .delete("todo.json", { data: { index: itemIndex } })
      .then(res => {
        console.log(itemIndex);
      })
      .catch(error => {
        console.log(error);
      });
  }
  handlePostTodo(todo) {
    axios.post("/todo.json", { todo }).catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    let localTodoItems = JSON.parse(localStorage.getItem("localTodoItems"));
    if (localTodoItems) {
      this.setState({
        todoItems: localTodoItems
      });
    }
  }
  componentDidUpdate() {
    this.updateLocalStorage();
  }
  updateLocalStorage() {
    let localTodoItems = JSON.stringify(this.state.todoItems);
    localStorage.setItem("localTodoItems", localTodoItems);
  }
  render() {
    return (
      <div className={this.props.visible ? classes.TodoList : classes.hide}>
        <h1>Todo list</h1>
        <List
          items={todoItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
        <Form addItem={this.addItem} />
      </div>
    );
  }
}

export default ToDoList;
