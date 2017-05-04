import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';



class LanguageFilter extends Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div className="LanguageFilter">
				<h5>Language:</h5>
				<select>
					<option value="All">All</option>
					<option value="PHP">PHP</option>
					<option value="JavaScript">JavaScript</option>
					<option value="Ruby">Ruby</option>
					<option value="Python">Python</option>
					<option value="Java">Java</option>
					<option value="C++">C++</option>
				</select>
			</div>
		)
	}
}

export default LanguageFilter;
