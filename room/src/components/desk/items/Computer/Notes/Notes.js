import React from "react";
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
  handleTextChange(event) {
    this.setState({
      text: event.target.value
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
        id: new Date(),
        userId: this.props.userId
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
  // Working
  onKeyDown(e) {
    if (e.key === "Enter") {
      this.handleNoteAdd();
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
          onChange={this.handleTextChange}
          onKeyDown={this.onKeyDown}
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
      val: ""
    };
  },
  handleSearch(e) {
    this.setState({
      val: e.target.value
    });
  },
  render() {
    let searchQuery = this.state.val.toLowerCase();
    let displayedNotes = !this.state.val
      ? this.props.notes
      : this.props.notes.filter(function(item) {
          let searchValue = item.about.toLowerCase();
          return searchValue.indexOf(searchQuery) !== -1;
        });
    // console.log(displayedNotes);
    return (
      <Auxiliary>
        <div ref={div => (this.grid = div)} className={classes.NotesGrid}>
          {displayedNotes.map(note => {
            return (
              <Note
                key={note.id}
                color={note.color}
                onDelete={() => this.props.onNoteDelete(note)}
              >
                {note.about}
              </Note>
            );
          })}
        </div>
        {/* Note search */}
        <input
          className={classes.NoteSearch}
          type="search"
          placeholder="Search..."
          value={this.state.val}
          onChange={this.handleSearch}
        />
      </Auxiliary>
    );
  }
});
const Notes = createReactClass({
  getInitialState() {
    return {
      notes: []
    };
  },
  componentDidMount() {
    let localNotes = JSON.parse(localStorage.getItem("notes"));
    //TODO
    // const queryParams = '?auth=' + this.props.token + '&orderBy="userId"&equalTo="' + this.props.userId + '"';
    // axios.get("/notes.json")
    // .then(res =>{
    // console.log(res.data)
    // const fetchedNotes = [];
    // for (let key in res.data) {
    // 	fetchedNotes.push({
    //     ...Object.values(res.data[key]),
    //     id: key
    // 	})
    // }
    // console.log(fetchedNotes)
    //   this.setState({
    //     notes: fetchedNotes
    //   })}

    // );
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
    axios
      .post("/notes.json?", { note })
      .then(res => {
        console.log(note);
      })
      .catch(error => {
        console.log(error);
      });
  },
  handleDeleteNote(note) {
    let noteId = note.id;
    // not working again TODO it properly
    // axios.delete("/notes" + noteId + ".json")
    axios.delete("/notes.json")
      .then(res => {
        console.log(note);
      })
      .catch(error => {
        console.log(error);
      });
    let newNotes = this.state.notes.filter(note => {
      return note.id !== noteId;
    });
    this.setState({
      notes: newNotes
    });
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
        <h1 className={classes.AppHeader}>Notes App</h1>
        <NoteGrid
          notes={this.state.notes}
          onNoteDelete={this.handleDeleteNote}
        />
        <NoteEditor onNoteAdd={this.handleNoteAdd} userId={this.props.userId} />
      </div>
    );
  },
  updateLocalStorage() {
    let notes = JSON.stringify(this.state.notes);
    localStorage.setItem("notes", notes);
  }
});

export default Notes;
