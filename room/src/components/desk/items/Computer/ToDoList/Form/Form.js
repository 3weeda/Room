import React from "react";
import classes from "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;

    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.refs.form.reset();
    }
  }
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className={classes.formInline}>
        <input
          type="text"
          ref="itemName"
          className={classes.formControl}
          placeholder="add a new todo..."
        />
        <button type="submit" className={classes.Submit}>
          Add
        </button>
      </form>
    );
  }
}

export default Form;
