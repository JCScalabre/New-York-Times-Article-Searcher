import React, { Component } from "react";
import Main from "../../components/Main";
import Search from "../../components/Search";
import API from "../../utils/API";
import Saved from "../../components/Saved";

class Homepage extends Component {
	state = {
		savedArticles: [],
		articles: [],
		topic: "",
		start: "",
		end: ""
	};

	// When the page loads, grab our saved articles from the DB using loadArticles method.
	componentDidMount() {
		this.loadArticles();
	}

	// Get saved articles from DB and set them to the state:
	loadArticles = () => {
		API.getSaved()
		.then(res => {
			this.setState({ savedArticles: res.data })
			});
			console.log(this.state.savedArticles)
	};

	// Our function that saves the right article into our DB:
	saveArticle = event => {
		var { id } = event.target;
		// Using a filter function to get the right article from our array of article results in our state:
		var result = this.state.articles.filter(function(obj) {
			return obj._id === id;
		});
		console.log(result);
		alert(
			"Article Saved (It's at the bottom)"
		);
		// Creating our own custom object to send to DB since we don't want all of the info that we retrieved from our NYT API call:
		var ObjectToSend = {};
		ObjectToSend.title = result[0].headline.main;
		ObjectToSend.url = result[0].web_url;
		ObjectToSend.author = result[0].byline.original;
		ObjectToSend.dateofpub = result[0].pub_date;
		ObjectToSend.snippet = result[0].snippet;
		API.saveArticle(ObjectToSend)
		// After the article is saved, reload articles so the new one dynamically appears:
		.then(res => this.loadArticles())
	};

	deleteArticle = event => {
		var { id } = event.target;
		console.log(id);
		API.deleteArticle(id)
		.then(res => this.loadArticles())
	}

	// Changing state whenever form is changed:
	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	// When form is submitted, make API call and put results into our state:
	handleFormSubmit = event => {
		event.preventDefault();
		API.getArticles(this.state.topic, this.state.start, this.state.end)
			.then(res => this.setState({ articles: res.data.response.docs }))
			.catch(err => console.log(err));
	};

	// Render function (passing down method functions as props for our Search and Saved components. aka Lifting State)
	render() {
			return (
				<Main>
					<Search
						handleInputChange={this.handleInputChange}
						handleFormSubmit={this.handleFormSubmit}
						articles={this.state.articles}
						saveArticle={this.saveArticle}
					/>
					<Saved 
						savedArticles={this.state.savedArticles}
						deleteArticle={this.deleteArticle}
					 />
				</Main>
			);
	}
}

export default Homepage;
