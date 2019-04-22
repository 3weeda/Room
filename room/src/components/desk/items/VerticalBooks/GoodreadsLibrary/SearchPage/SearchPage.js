import React, { Component } from 'react';
import Searchbox from '../Searchbox/Searchbox.js';
import Book from '../Book/Book';
import classes from './SearchPage.css'

class SearchPage extends Component {
    render() {
        return (
            <div style={!this.props.visible ? { display: 'none' } : null} onClick={this.showPage}>
            <div className={classes.closeSearch} onClick={this.props.showPage}></div>
                {this.props.expandedBook ?
                    (
                        <Book
                            bookData={this.props.expandedBook}
                            collapseBook={this.props.collapseBook}
                        />
                    )
                    :
                    (
                        <Searchbox
                            results={this.props.results}
                            library={this.props.library}
                            setResults={this.props.setResults}
                            expandBook={this.props.expandBook}
                            changeShelf={this.props.changeShelf}
                        />
                    )
                }
            </div>
        );
    }
}

export default SearchPage;
