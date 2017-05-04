import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';



class FrameworkFilter extends Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div className="FrameworkFilter">
				<h5>Framework:</h5>
				<select>
					<option value="All">All</option>
					<option value="ReactJS">JavaScript</option>
					<option value="Ruby on Rails">Ruby</option>
					<option value="Django">Python</option>
					<option value="Laravel">Java</option>
					<option value="Flask">C++</option>
				</select>
			</div>
		)
	}
}

export default FrameworkFilter;