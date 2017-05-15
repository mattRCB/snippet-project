import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterBoard from './FilterBoard';
import SelectorList from './SelectorList';
import SnippetWell from './SnippetWell';
import Header from './Header';

import '../assets/stylesheets/base.scss';


class App extends Component {
	constructor() {
		super();

		this.state = {}

		// REMEMBER TO .bind(this) ON ALL METHODS HERE:

	}

	componentDidMount() {

	}

	componentDidUpdate() {}


	render() {
		return (
			<div className="App">
				<Header />
				<FilterBoard />
				<SelectorList snippets={snippets} />
				<SnippetWell />
			</div>
		)
	}
}

export default App;




const snippets = [
	{
		id: 0,
		title: "SnippetTest0",
		body: "import SelectorList from './SelectorList'",
		desc: "This is a test description. It's the one that shows an example of an ES6 import.",
		type: "public",
		lang: "JavaScript",
		framework: "",
		tags: []
	},
	{
		id: 1,
		title: "SnippetTest1",
		body: "const ListItem = (props) => ()",
		desc: "Here's another test description. This one just shows an ES6-style arrow function.",
		type: "private",
		lang: "JavaScript",
		framework: "",
		tags: []
	}
]

{/*
		fetch('https://snipstr.herokuapp.com/addsnippet', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: "Snippet Test2",
				body: "",
				desc: "This is a another description"
				type: "public",
				lang: ""
			})
		});
*/}
