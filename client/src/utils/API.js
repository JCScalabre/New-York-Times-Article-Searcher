import axios from "axios";

export default {
	getArticles: function(topic, start, end) {
		var authKey = "22a64f0e090042ada0b6088cc3e66c3a";
		var queryURL =
			"https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
			authKey +
			"&q=" +
			topic +
			"&begin_date=" +
			start +
			"0101" +
			"&end_date=" +
			end +
			"1231";
		return axios.get(queryURL)
	},

	saveArticle: function(articleData) {
		return axios.post("/api/saved", articleData)
	},

	getSaved: function() {
		return axios.get("/api/saved")
	}
};
