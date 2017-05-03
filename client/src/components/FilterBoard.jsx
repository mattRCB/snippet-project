import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';
import PrivacyFilter from './PrivacyFilter';
import LanguageFilter from './LanguageFilter';
import FrameworkFilter from './FrameworkFilter';


class FilterBoard extends Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div className="FilterBoard">
				<PrivacyFilter />
				<LanguageFilter />
				<FrameworkFilter />
			</div>
		)
	}
}

export default FilterBoard;
