import React, { Component } from "react";
import "./Search.css";
import API from "../../utils/API";
import { ArticleList, ArticleListItem } from "../ArticleList";

class Search extends Component {
	state = {
		articles: [],
		topic: "",
		start: "",
		end: ""
	};

	saveArticle = event => {
		var { id } = event.target
		var result = this.state.articles.filter(function (obj) {
			return obj._id === id
		})
		console.log(result)
		alert("Article Saved. MUST REFRESH PAGE TO SEE SAVED ARTICLES. WILL FIX THIS IF I HAVE TIME")
		var ObjectToSend = {}
		ObjectToSend.title = result[0].headline.main
		ObjectToSend.url = result[0].web_url
		ObjectToSend.author = result[0].byline.original
		ObjectToSend.dateofpub = result[0].pub_date
		ObjectToSend.snippet = result[0].snippet
		API.saveArticle(ObjectToSend)
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		API.getArticles(this.state.topic, this.state.start, this.state.end)
		.then(res => this.setState({ articles: res.data.response.docs }))
		.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
			<div className="card text-center">
				<h4 className="card-title">Search</h4>
				<form>
					<div className="form-group">
						<label>Topic</label>
						<input onChange={this.handleInputChange} name="topic" type="text" className="form-control" />
					</div>
					<div className="form-group">
						<label>Start Year</label>
						<input onChange={this.handleInputChange} name="start" type="text" className="form-control" />
					</div>
					<div className="form-group">
						<label>End Year</label>
						<input onChange={this.handleInputChange} name="end" type="text" className="form-control" />
					</div>
					<button onClick={this.handleFormSubmit} type="submit" className="btn btn-success">
						Search
					</button>
				</form>
			</div>
				<h2>Search Results: </h2>
				<ArticleList>
					{this.state.articles.map(article => {
						return (
							<ArticleListItem
								key={article._id}
								id={article._id}
								title={article.headline.main}
								author={article.byline.original}
								date={article.pub_date}
								link={article.web_url}
								snippet={article.snippet}
								type={article.type_of_material}
								button={this.saveArticle}
							>
							</ArticleListItem>
						)
					})}
				</ArticleList>
			</div>
		);
	}
}

export default Search;
