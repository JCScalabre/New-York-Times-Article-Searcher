import React from "react";

// ArticleList renders a bootstrap list item
export const ArticleList = props => (
	<ul className="list-group">
		{props.children}
	</ul>
);
