import React, { Component } from 'react';
import SelectorList from './SelectorList';

class SelectorContainer extends Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div className="SelectorContainer">
				<SelectorList />
			</div>
		)
	}
}


export default SelectorContainer;