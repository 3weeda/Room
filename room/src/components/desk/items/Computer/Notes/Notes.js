import React from "react";
// import Masonry from "masonry-layout";
import createReactClass from "create-react-class";
import classes from "./Notes.css";
import Auxiliary from "../../../../../hoc/Auxiliary/Auxiliary";
import axios from "../../../../../axios-orders";

const Note = createReactClass({
  render() {
    let style = { backgroundColor: this.props.color };
    return (
      <div id="Note" className={classes.Note} style={style}>
        <span className={classes.DeleteNote} onClick={this.props.onDelete}>
          ×
        </span>
        {this.props.children}
      </div>
    );
  }
});
const NoteSearch = createReactClass({
  render() {
    return (
      <input
        className={classes.NoteSearch}
        type="search"
        placeholder="Search..."
        onChange={this.props.onSearch}
      />
    );
  }
});
const NoteColors = createReactClass({
  render() {
    let colors = ["grey", "green", "tomato", "yellow", "red", "brown"];
    return (
      <div className={classes.ColorsList}>
        {colors.map((el, i) => {
          return (
            <div key={i} style={{ backgroundColor: el }}>
              <input
                className={classes.RadioCustom}
                id={el}
                type="radio"
                name="color"
                onChange={e => this.props.onColorChanged(e, el)}
              />
              <label className={classes.RadioCustomLabel} htmlFor={el} />
            </div>
          );
        })}
      </div>
    );
  }
});
const NoteEditor = createReactClass({
  getInitialState() {
    this._hadleColorChange = this.hadleColorChange;

    return {
      text: "",
      color: "",
      checked: false
    };
  },
  hadleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  },
  hadleColorChange(e, color) {
    this.input = e.target;
    this.setState({
      color: color,
      checked: e.target.checked
    });
  },
  handleNoteAdd() {
    if (this.state.text.length) {
      let newNote = {
        about: this.state.text,
        color: this.state.color,
        id: new Date()
      };
      this.props.onNoteAdd(newNote);
      this.setState({
        text: "",
        color: "",
        checked: false
      });
      if (this.state.checked) this.input.checked = false;
    }
  },
  render() {
    return (
      <div className={classes.NoteEditor}>
        <textarea
          className={classes.Textarea}
          placeholder="Enter your note here..."
          rows={5}
          value={this.state.text}
          onChange={this.hadleTextChange}
        />
        <div className={classes.Controls}>
          <NoteColors onColorChanged={this._hadleColorChange} />
          <button className={classes.AddButton} onClick={this.handleNoteAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
});
const NoteGrid = createReactClass({
  getInitialState() {
    return {
      value: ""
    };
  },
  // componentDidMount() {
  //   this.msnry = new Masonry(this.grid, {
  //     itemSelector: "#Note",
  //     columnWidth: 250,
  //     gutter: 10,
  //     fitWidth: true,
  //     initLayout: true
  //   });
  //   this.msnry.reloadItems();
  //   this.msnry.layout();
  // },
  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     this.props.notes.length !== prevProps.notes.length ||
  //     this.state.value.length !== prevState.value.length
  //   ) {
  //     this.msnry.reloadItems();
  //     this.msnry.layout();
  //   }
  // },
  handleSearch(e) {
    this.setState({
      value: e.target.value
    });
  },
  render() {
    let searchQuery = this.state.value.toLowerCase();
    let displayedNotes = !this.state.value
      ? this.props.notes
      : this.props.notes.filter(function(item) {
          let searchValue = item.about.toLowerCase();
          return searchValue.indexOf(searchQuery) !== -1;
        });
    console.log(displayedNotes);
    return (
      <Auxiliary>
        <div ref={div => (this.grid = div)} className={classes.NotesGrid}>
          {displayedNotes.map(note => {
            return (
              <Note
                key={note.id}
                color={note.color}
                onDelete={this.props.onNoteDelete.bind(null, note)}
              >
                {note.about}
              </Note>
            );
          })}
        </div>
        <NoteSearch onSearch={this.handleSearch} />
      </Auxiliary>
    );
  }
});
const Notes = createReactClass({
  getInitialState() {
    return {
      // notes: this.props.notes
      notes: []
    };
  },
  componentDidMount() {
    let localNotes = JSON.parse(localStorage.getItem("notes"));
    if (localNotes) {
      this.setState({
        notes: localNotes
      });
    }
  },
  componentDidUpdate() {
    this.updateLocalStorage();
  },
  handlePostNote(note) {
    axios.post("/notes.json", { note })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  handleDeleteNote(note) {
    let noteId = note.id;
    //All notes are deleted, not only one
    axios.delete("notes.json", { data: { id: { noteId } } })
      .then(res => {
        console.log(noteId);
      })
      .catch(error => {
        console.log(error);
      });
    let newNotes = this.state.notes.filter(note => {
      return note.id !== noteId;
    });
    this.setState({
      notes: newNotes
    })
    //Repost remaining notes again
    newNotes.map(note => {
      return this.handlePostNote(note);
    });
  },
  handleNoteAdd(newNote) {
    this.setState({
      notes: [newNote, ...this.state.notes]
    });
    this.handlePostNote(newNote);
  },
  render() {
    return (
      <div className={this.props.visible ? classes.NotesApp : classes.hide}>
        <button className={classes.BackButton} onClick={this.props.backToList}>
          🡐
        </button>
        <h2 className={classes.AppHeader}>Notes App</h2>
        <NoteGrid
          notes={this.state.notes}
          onNoteDelete={this.handleDeleteNote}
        />
        <NoteEditor onNoteAdd={this.handleNoteAdd} />
      </div>
    );
  },
  updateLocalStorage() {
    let notes = JSON.stringify(this.state.notes);
    localStorage.setItem("notes", notes);
  }
});

export default Notes;
