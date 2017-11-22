import React, { Component } from "react";
import API from "../../utils/API";
import { SavedList, SavedListItem } from "../SavedList";

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
      		<p key={article.url}>URL: {article.url}</p>
      		</a>
      		<p key={article.date}>Date Saved: {article.date}</p>
      	</div>
			)
	})}
</div>

);

export default Saved;
