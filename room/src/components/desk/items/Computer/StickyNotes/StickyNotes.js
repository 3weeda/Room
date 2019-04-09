import React from "react";
import $ from "jquery";
import classes from "./StickyNotes.css";
import "jquery-ui-dist/jquery-ui";

class Note extends React.Component {
  constructor(props) {
    // debugger;
    super(props);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.state = {
      checked: false,
      editing: false
    };
    console.log("view all props for Note class: " + this.props.children);
  }
  //Event methods
  componentWillMount() {
    this.style = {
      right: this.randomBetween(50,150) + "px",
      top: this.randomBetween(10,60) + "px",
      transform: "rotate( " + this.randomBetween(-15, 10) + "deg)"
    };
  }
  componentDidMount() {
    var mine = this._input;
    $(mine).draggable();
  }
  randomBetween(min, max) {
    return min + Math.ceil(Math.random() * max);
  }
  edit() {
    this.setState({ editing: true });
  }
  save() {
    this.props.onChange(this.refs.newText.value, this.props.index);
    this.setState({ editing: false });
  }
  remove() {
    // debugger;
    this.props.onRemove(this.props.index);
  }
  handleClick() {
    this.setState({ checked: !this.state.checked });
  }

  renderDisplay() {
    return (
      <div
        ref={c => (this._input = c)}
        className={classes.Note}
        style={this.style}
      >
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit} className={classes.Edit}>
            edit
          </button>

          <button onClick={this.remove} className={classes.Remove}>
            delete
          </button>
        </span>
      </div>
    );
  }
  renderForm() {
    return (
      <div ref="myNote" className={classes.Note} style={this.style}>
        <textarea
          ref="newText"
          defaultValue={this.props.children}
          className={classes.FormControl}
        />
        <button className={classes.Save} onClick={this.save}>
          save
        </button>
      </div>
    );
  }
  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}

//parent component for notes
class StickyNotes extends React.Component {
  constructor() {
    super();

    this.update = this.update.bind(this);
    this.eachNote = this.eachNote.bind(this);
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
    this.state = {
      notesStringArray: []
    };
  }
  //Event methods
  nextId() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  }
  update(newText, i) {
    var arr = this.state.notesStringArray;
    arr[i].note = newText;
    this.setState({ notesStringArray: arr });
  }
  eachNote(element, i) {
    return (
      <Note
        key={element.id}
        index={i}
        onChange={this.update}
        onRemove={this.remove}
      >
        {element.note}
      </Note>
    );
  }
  remove(index) {
    var arr = this.state.notesStringArray;
    var elm = arr[index];
    arr.splice(index, 1);
    this.setState({ notesStringArray: arr });
    return elm;
  }
  add(text) {
    var arr = this.state.notesStringArray;
    arr.push({
      id: this.nextId(),
      note: text
    });
    JSON.stringify(arr);
    this.setState({ notesStringArray: arr });
  }
  componentDidMount() {
    let localStickyNotes = JSON.parse(localStorage.getItem("localStickyNotes"));
    if (localStickyNotes) {
      this.setState({
        notesStringArray: localStickyNotes
      });
    }
  }
  componentDidUpdate() {
    this.updateLocalStorage();
  }
  updateLocalStorage() {
    let localStickyNotes = JSON.stringify(this.state.notesStringArray);
    localStorage.setItem("localStickyNotes", localStickyNotes);
  }
  render() {
    return (
      <div className={classes.StickyNotes}>
        {this.state.notesStringArray.map(this.eachNote)}
        <button
          className={classes.Glyphicon}
          onClick={this.add.bind(null, "New Note!")}
          title="Add a Sticky Note!"
        >
          +
        </button>
      </div>
    );
  }
}

StickyNotes.propTypes = {
  count: function(props, propName) {
    if (typeof props[propName] !== "number") {
      return new Error("The count property must be a number");
    }

    if (props[propName] > 100) {
      return new Error("Creating " + props[propName] + "notes is ridiculous ");
    }
  }
};

export default StickyNotes;
