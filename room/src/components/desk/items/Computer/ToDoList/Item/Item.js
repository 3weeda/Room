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
      <li className="list-group-item ">
        <div
          className={todoClass}
          aria-hidden="true"
          onClick={this.onClickDone}
        >
          {this.props.item.value}
          <button
            type="button"
            className={classes.Icon}
            onClick={this.onClickClose}
          >
            &times;
          </button>
        </div>
      </li>
    );
  }
}

export default Item;
