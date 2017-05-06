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
				<SelectorList />
				<SnippetWell />
			</div>
		)
	}
}

export default App;



{/*
		fetch('https://snipstr.herokuapp.com/addsnippet', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({title: "Snippet Test2", desc: "This is a another description"})
		});
*/}
