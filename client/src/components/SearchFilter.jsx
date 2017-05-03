import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';



class SearchFilter extends Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div className="SearchFilter">
				<h5>Filter by Search Term:</h5>
				<input type="text" placeholder="Search Title" />
				<input type="text" placeholder="Search Description" />
				<input type="text" placeholder="Search Full Text" />
				
			</div>
		)
	}
}

export default SearchFilter;