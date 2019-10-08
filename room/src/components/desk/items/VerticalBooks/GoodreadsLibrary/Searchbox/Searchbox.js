import React, { Component } from 'react';
import Axios from "axios";
import Cardlist from '../Cardlist/Cardlist.js';
import classes from './Searchbox.css';

const apiKey = "x9Mns1ayA7AWF4jBG5jAlw";

class Searchbox extends Component {

	state = {
		searchText: "",
		error: "",
		fetchingData: false
	};

	onTextChange = val => {
		this.setState({
			searchText: val.target.value
		});
	};

	onButtonClick = () => {
		this.setState({
			fetchingData: true
		});

		const { searchText } = this.state;
		const requestUri =
			`https://cors-anywhere.herokuapp.com/` +
			`https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`;

		Axios.get(requestUri)
			.then(res => {
				this.parseXMLResponse(res.data);
			})
			.catch(error => {
				this.setState({
					error: error.toString(),
					fetchingData: false
				});
			});
	};

	parseXMLResponse = response => {
		const parser = new DOMParser();
		const XMLResponse = parser.parseFromString(response, "application/xml");
		const parseError = XMLResponse.getElementsByTagName("parsererror");

		if (parseError.length) {
			this.setState({
				error: "There was an error fetching results.",
				fetchingData: false
			});
		} else {
			const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
			const searchResults = XMLresults.map(result => this.XMLToJson(result));
			const fetchedResults = [];
			for (let key in searchResults) {
				fetchedResults.push({
					...searchResults[key],
					shelf: ""
				})
			}
			this.setState({ fetchingData: false }, () => {
				this.props.setResults(fetchedResults);
			});
		}
	};

	// Function to convert simple XML document into JSON.
	// Loops through each child and saves it as key, value pair
	// if there are sub-children, call the same function recursively on its children.
	XMLToJson = XML => {
		const allNodes = new Array(...XML.children);
		const jsonResult = {};
		allNodes.forEach(node => {
			if (node.children.length) {
				jsonResult[node.nodeName] = this.XMLToJson(node);
			} else {
				jsonResult[node.nodeName] = node.innerHTML;
			}
		});
		return jsonResult;
	};

	render() {
		return (
			<div className={classes.Searchbox}>
				<div className={classes.SearchHeader}>
					<fieldset className={[classes.Filed, classes.clearFix].join(" ")}>
						<legend className={classes.Legend}>
							SEARCH FOR BOOKS
				      	</legend>
						<div className={classes.clearFix}>
							<input className={classes.Input}
								placeholder="Search Books By title, author, or ISBN..."
								onChange={this.onTextChange}
								type="text"
								value={this.state.searchText}
							/>
							<button className={classes.Button}
								onClick={this.onButtonClick}
							>
								Search
				        	</button>
						</div>
					</fieldset>
				</div>

				{this.state.fetchingData ? (
					<h1 className={classes.List}>
						{"loading... "}
					</h1>
				) : (
						(this.state.error && (
							<h1 className={classes.Error}>{this.state.error}</h1>
						)) || (
							<Cardlist
								books={this.props.results}
								library={this.props.library}
								expandBook={this.props.expandBook}
								changeShelf={this.props.changeShelf}
							/>
						)
					)}
			</div>
		);
	}
}

export default Searchbox;
