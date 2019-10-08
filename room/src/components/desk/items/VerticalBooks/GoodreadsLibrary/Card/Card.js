import React from 'react';
import classes from './Card.css';

const Card = (props) => {

	const bookTitle = props.bookData.best_book.title;
	let displayTitle = bookTitle.substring(0, 12);
	if (bookTitle.length > displayTitle.length) {
		displayTitle += "...";
	}

	return (
		<article className={classes.article}>
			<img
				src={props.bookData.best_book.image_url}
				className={classes.bookCover}
				alt="BOOK COVER"
				style={{
					'height': '300px',
					'width': '222px'
				}}
			/>
			<div className={classes.bookInfo}>
				<div className={classes.table}>
					<div className={classes.tableCell}>
						<h1 className={classes.hint}>
							<span className="hint--bottom" aria-label={displayTitle.includes("...") ? bookTitle : ""}>
								{displayTitle}
							</span>
						</h1>
					</div>
				</div>
				<p className={classes.authorName}>
					{props.bookData.best_book.author.name}
				</p>

				<a className={classes.moreInfo} onClick={() => props.expandBook(props.bookData)} href='##' >
					More Info
			  	</a>
				<div className={classes.bookShelfChanger}>
					<select
						onChange={(event) => props.changeShelf(props.bookData, event.target.value)}
						value={props.currentShelf}
					>
						<option value="move" disabled>Move to...</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
			</div>
		</article>
	);
}

export default Card;
