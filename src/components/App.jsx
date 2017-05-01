import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterBoard from './FilterBoard.jsx';
import SelectorList from './SelectorList.jsx';
import SnippetWell from './SnippetWell.jsx';
import Header from './Header.jsx';

import '../assets/stylesheets/base.scss';


class App extends Component {
	constructor() {
		super();

		this.state = {}

		// REMEMBER TO .bind(this) ON ALL METHODS HERE:


	}

	ComponentDidMount() {}

	ComponentDidUpdate() {}

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
