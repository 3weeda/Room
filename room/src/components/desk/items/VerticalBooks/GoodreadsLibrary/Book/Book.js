import React, { Component } from "react";
import classes from "./Book.css";
import Axios from "axios";

class Book extends Component {

	constructor(props) {
		super(props);
		this.state = {
			description: "Loading description ... ",
			error: ""
		};
	};

	componentDidMount() {
		this.getDescription();
	};

	getDescription = () => {
		const bookId = this.props.bookData.best_book.id;
		const apiKey = "x9Mns1ayA7AWF4jBG5jAlw";
		const requestUri =
			`https://cors-anywhere.herokuapp.com/` +
			`https://www.goodreads.com/book/show/${bookId}?key=${apiKey}`;

		Axios.get(requestUri)
			.then(res => {
				this.parseXMLresponse(res.data);
			})
			.catch(error => {
				this.setState({
					error: error.toString()
				});
			});
	};

	parseXMLresponse = (data) => {
		const parser = new DOMParser();
		const XMLResponse = parser.parseFromString(data, "application/xml");
		const parseError = XMLResponse.getElementsByTagName("parsererror");

		if (parseError.length) {
			this.setState({
				error: "There was an error fetching results."
			});
		} else {
			let description = XMLResponse.getElementsByTagName("description")[0].innerHTML;
			description = description.replace("<![CDATA[", "").replace("]]>", "");

			if (!description) {
				description = "No description found.";
			}
			this.setState({ description });
		}
	};

	render() {
		const { bookData } = this.props;
		return (
			<article className={classes.article}>
				<div className={classes.Back} onClick={this.props.collapseBook}>Go Back</div>
				<h1 className={classes.bookTitle}> {bookData.best_book.title}</h1>
				<div className={classes.Container}>
					<header className={classes.Header}>
						<div className={classes.Table}>
							<img src={bookData.best_book.image_url} alt="book" className={classes.Thumbnail} />
							<div>
								<p className={classes.BookDetail}>Author  :  {bookData.best_book.author.name}</p>
								<p className={classes.BookDetail}>Avg. Rating  :  {bookData.average_rating}</p>
								{/* <p className='pv2 ma0'>Published Date: {`${bookData.original_publication_day}/${bookData.original_publication_month}/${bookData.original_publication_year}`}</p> */}
								<p>Published Year: {`${bookData.original_publication_year}`}</p>
							</div>
						</div>
					</header>
					<div className={classes.Description}>
						<div>
							{(this.state.error && (<p>{this.state.error}</p>)) || (<p dangerouslySetInnerHTML={{ __html: this.state.description }} />)}
						</div>
						<h3>
							<a href={`https://www.goodreads.com/book/show/${bookData.best_book.id}`} className={classes.learnMore}>
								Learn More
				    	</a>
						</h3>
					</div>
				</div>

			</article>
		)
	}
}

export default Book;
