import React from "react";
import List from "./List/List";
import Form from "./Form/Form";
import classes from "./ToDoList.css";

var todoItems = [];
// todoItems.push({ index: 1, value: "learn react", done: false });
// todoItems.push({ index: 2, value: "Go shopping", done: true });
// todoItems.push({ index: 3, value: "buy flowers", done: true });

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: todoItems };
  }
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems: todoItems });
  }
  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }
  render() {
    return (
      <div className={this.props.visible ? classes.TodoList : classes.hide}>
        <button className={classes.BackButton} onClick={this.props.backToList}>🡐</button>
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
