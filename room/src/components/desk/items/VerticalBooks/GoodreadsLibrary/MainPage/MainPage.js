import React, { Component } from 'react';
import Shelf from '../Shelf/Shelf';
import Book from '../Book/Book';
import classes from './MainPage.css'

const shelves = [
  { shelf: "Currently Reading", title: "currentlyReading" },
  { shelf: "Want to Read", title: "wantToRead" },
  { shelf: "Read", title: "read" }
]
class MainPage extends Component {
  render() {
    return (
      <div className={this.props.visible ? classes.listBooks : classes.hide}>
        {this.props.expandedBook ?
          (
            <Book
              bookData={this.props.expandedBook}
              collapseBook={this.props.collapseBook}
            />
          )
          :
          (
            <div>
              <div className={classes.listBooksTitle}>
                <h1>Library</h1>
              </div>
              <div title="Add a new book" className={classes.openSearch} onClick={this.props.showPage}>
              </div>
              <div className={classes.listBooksContent}>
                <div className={classes.libraryBody}>
                  {shelves.map(myShelf => {
                    return <Shelf
                      key={myShelf.title}
                      shelf={myShelf.shelf}
                      title={myShelf.title}
                      books={this.props.results}
                      changeShelf={this.props.changeShelf}
                      expandBook={this.props.expandBook}
                    />
                  })}
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default MainPage;
