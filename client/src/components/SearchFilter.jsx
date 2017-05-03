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
				<input typeName="text" placeholder="Search Title" />
				<input typeName="text" placeholder="Search Description" />
				<input typeName="text" placeholder="Search Full Text" />
				
			</div>
		)
	}
}

export default SearchFilter;