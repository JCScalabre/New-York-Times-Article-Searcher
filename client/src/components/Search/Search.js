import React from "react";
import "./Search.css";
import { ArticleList, ArticleListItem } from "../ArticleList";

const Search = props => (
	<div>
		<div className="card text-center">
			<h4 className="card-title">Search</h4>
			<form>
				<div className="form-group">
					<label>Topic</label>
					<input
						onChange={props.handleInputChange}
						name="topic"
						type="text"
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>Start Year</label>
					<input
						onChange={props.handleInputChange}
						name="start"
						type="text"
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label>End Year</label>
					<input
						onChange={props.handleInputChange}
						name="end"
						type="text"
						className="form-control"
					/>
				</div>
				<button
					onClick={props.handleFormSubmit}
					type="submit"
					className="btn btn-success"
				>
					Search
				</button>
			</form>
		</div>
		<h2>Search Results: </h2>
		<ArticleList>
			{props.articles.map(article => {
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
						button={props.saveArticle}
					/>
				);
			})}
		</ArticleList>
	</div>
);
export default Search;
