import React from 'react';
import Card from '../Card/Card.js';
import classes from './Cardlist.css';

const Cardlist = (props) => {
	return (
		<div className={classes.list}>
			{props.books.map(book => {
				// let noneShelf = "none"
				// props.library.map(localBook => (
				// 	localBook.id === book.id ?
				// 		noneShelf = localBook.shelf : ""
				// ))
				return (
					<Card
						bookData={book}
						key={book.id}
						expandBook={props.expandBook}
						changeShelf={props.changeShelf}
						currentShelf="none"
					/>
				)
			})}
		</div>
	);
}

export default Cardlist;
