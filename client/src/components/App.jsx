import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FilterBoard from './FilterBoard';
import SelectorContainer from './SelectorContainer';
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

	ComponentDidMount() {}

	ComponentDidUpdate() {}

	render() {
		return (
			<div className="App">
				<Header />
				<FilterBoard />
				<SelectorContainer />
				<SnippetWell />
			</div>
		)
	}
}

export default App;
