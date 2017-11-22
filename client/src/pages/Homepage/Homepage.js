import React, { Component } from "react";
import Main from "../../components/Main";
import Search from "../../components/Search";
import API from "../../utils/API";
import Saved from "../../components/Saved";

// const Homepage = () =>
// <div>
//   <Main >
//     <Search />
//     <Saved />
//   </Main>
// </div>

class Homepage extends Component {
	state = {
		articles: [],
		topic: "",
		start: "",
		end: ""
	};

	componentDidMount() {
		API.getSaved().then(res => {
			console.log(res.data);
			this.setState({
				savedArticles: res.data
			});
			console.log(this.state.savedArticles);
		});
	}

	saveArticle = event => {
		var { id } = event.target;
		var result = this.state.articles.filter(function(obj) {
			return obj._id === id;
		});
		console.log(result);
		alert(
			"Article Saved. MUST REFRESH PAGE TO SEE SAVED ARTICLES. WILL FIX THIS IF I HAVE TIME"
		);
		var ObjectToSend = {};
		ObjectToSend.title = result[0].headline.main;
		ObjectToSend.url = result[0].web_url;
		ObjectToSend.author = result[0].byline.original;
		ObjectToSend.dateofpub = result[0].pub_date;
		ObjectToSend.snippet = result[0].snippet;
		API.saveArticle(ObjectToSend);
	};

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
			.catch(err => console.log(err));
	};

	render() {
		if (this.state.savedArticles) {
			return (
				<Main>
					<Search
						handleInputChange={this.handleInputChange}
						handleFormSubmit={this.handleFormSubmit}
						articles={this.state.articles}
						saveArticle={this.saveArticle}
					/>
					<Saved savedArticles={this.state.savedArticles} />
				</Main>
			);
		} else return <p>loading</p>;
	}
}

export default Homepage;
