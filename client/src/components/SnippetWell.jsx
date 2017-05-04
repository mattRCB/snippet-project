import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';
import SnippetText from './SnippetText';


class SnippetWell extends Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div className="SnippetWell">
				<SnippetText />
			</div>
		)
	}
}

export default SnippetWell;