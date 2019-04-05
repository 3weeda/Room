import React from "react";
import classes from "./Item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render() {
    var todoClass = this.props.item.done ? classes.Done : classes.Undone;
    return (
      <li className={classes.ListItem}>
        <div className={classes.todoName} onClick={this.onClickDone}>
          <div
            className={todoClass}
            aria-hidden="true"
          >
            {this.props.item.value}
          </div>
        </div>
        <button
          type="button"
          className={classes.Icon}
          onClick={this.onClickClose}
        >
          &times;
        </button>
      </li>
    );
  }
}

export default Item;
