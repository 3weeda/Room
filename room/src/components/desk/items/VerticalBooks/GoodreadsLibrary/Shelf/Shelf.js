import React, { Component } from 'react';
import Card from '../Card/Card';
import classes from './Shelf.css'

class Shelf extends Component {
  render() {
    return (
      <div className={classes.bookshelf}>
        <h2 className={classes.bookshelfTitle}><div className={classes.titleChild}>{this.props.shelf}</div></h2>
        <div className={classes.bookshelfBooks}>
          <ol className={classes.booksGrid}>
            {this.props.books
              .filter(book => book.shelf === this.props.title)
              .map(book => (
                <li key={book.id + Math.random()}>
                  <Card
                    bookData={book}
                    expandBook={this.props.expandBook}
                    changeShelf={this.props.changeShelf}
                    currentShelf={this.props.title}
                  />
                </li>))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;
