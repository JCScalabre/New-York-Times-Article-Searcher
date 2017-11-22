import React from "react";
import "./saved.css";

const Saved = props => ( 
<div>
<h2>Saved Articles: </h2>
	{props.savedArticles.map((article, i) => {
		return (
			<div key={i} className="card">
      		<h4 key={article.title}>Title: {article.title}</h4>
      		<p key={article.author}>{article.author}</p>
      		<p key={article.snippet}>Snippet: {article.snippet}</p>
      		<a target="_blank" href={article.url}>
      		<p key={article.url}>Link to article (opens in new tab)</p>
      		</a>
      		<p key={article.date}>Date Saved: {article.date}</p>
                  <button id={article._id} onClick={props.deleteArticle} className="btn delete btn-danger">Delete Article</button>
      	</div>
			)
	})}
</div>

);

export default Saved;
