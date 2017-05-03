import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';
import PrivacyFilter from './PrivacyFilter';


class FilterBoard extends Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div className="FilterBoard">
				<PrivacyFilter />
			</div>
		)
	}
}

export default FilterBoard;
