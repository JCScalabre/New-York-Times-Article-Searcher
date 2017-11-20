import React, { Component } from "react";
import API from "../../utils/API";
import { SavedList, SavedListItem } from "../SavedList";

class Saved extends Component {
	constructor(props) {
    super(props);
    this.state = {
      savedArticles: []
    }
  }

	// When the component mounts, load all saved articles and save them to this.state.savedArticles
	componentDidMount() {
		var _this = this;
		API.getSaved()
		.then(function(res) {
			console.log(res.data)
			_this.setState({
				savedArticles: res.data
			})
		})
		.catch(function(e) {
			console.log("ERROR", e);
		})
	}

	render() {
		const renderArticles = this.state.savedArticles.map(function(item, i) {
      	return (
      		<div key={i} className="card">
      		<p key={item.title}>Title: {item.title}</p>
      		<p key={item.author}>{item.author}</p>
      		<p key={item.snippet}>Snippet: {item.snippet}</p>
      		<p key={item.url}>URL: {item.url}</p>
      		<p key={item.date}>Date Saved: {item.date}</p>
      		</div>
      		)
		})

			return (
				<div>
					<h2>Saved Articles: </h2>
						<h5>{renderArticles}</h5>
				</div>
			);
		}
}

export default Saved;
