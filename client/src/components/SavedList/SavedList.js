import React from "react";

// ArticleList renders a bootstrap list item
export const SavedList = props => (
	<ul className="list-group">
		{props.children}
	</ul>
);
