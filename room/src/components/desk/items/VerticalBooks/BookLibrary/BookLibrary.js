import React from "react";
import classes from "./BookLibrary.css";

const Result = ({ thumbnail, title }) => (
  <div className={classes.Result}>
    <div className="result-image">
      <img src={thumbnail} alt="Book thumbnail" />
    </div>
    <div className={classes.Title}>{title}</div>
  </div>
);

class BookLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {},
      query: ""
    };
    this.onType = this.onType.bind(this);
    this.search = this.search.bind(this);
  }

  search() {
    const { query } = this.state;
    console.log(this.state);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(res => (res.ok ? res.json() : Promise.reject()))
      .then(res =>
        res.items.map(b => ({
          id: b.id,
          title: b.volumeInfo.title,
          thumbnail:
            b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.smallThumbnail
        }))
      )
      .then(res =>
        this.setState({
          books: res
        })
      );
  }

  onType(e) {
    this.setState({ query: e.target.value });
    clearTimeout(this.debouncedType);
    this.debouncedType = window.setTimeout(this.search, 500);
  }

  render() {
    return (
      <div className={classes.BookLibrary}>
        Search Google Book Api:{" "}
        <input type="text" value={this.state.query} onChange={this.onType} />
        <div className={classes.Results}>
          {Object.keys(this.state.books).map(book => {
            book = this.state.books[book];
            return <Result key={book.id} {...book} />;
          })}
        </div>
      </div>
    );
  }
}

export default BookLibrary;
