import React from "react";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const SavedListItem = props => (
  <li className="list-group-item">
      <h5>Title: {props.title}</h5>
      <h5>{props.author}</h5>
      <h5>Date: {props.date}</h5>
      <h5>Link: {props.link}</h5>
      <h5>Type: {props.type}</h5>
      <button id={props.id} onClick={props.button}>Unsave Article</button>
  </li>
);
