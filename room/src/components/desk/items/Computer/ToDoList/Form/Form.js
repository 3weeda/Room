import React from "react";
import classes from "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.state = {
      value: ""
    };
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(e) {
    e.preventDefault();
    var newItemValue = this.refs.itemName.value;
    if (newItemValue) {
      this.props.addItem({ newItemValue });
      this.refs.form.reset();
      this.setState({ value: "" });
    }
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  onKeyDown(e) {
    if (e.key === "Enter") {
      this.onSubmit(e);
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
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.onKeyDown}
        />
        <button type="submit" className={classes.Submit}>
          Add
        </button>
      </form>
    );
  }
}

export default Form;
