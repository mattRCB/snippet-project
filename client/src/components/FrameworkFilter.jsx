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
					<option value="ReactJS">ReactJS</option>
					<option value="Ruby on Rails">Ruby on Rails</option>
					<option value="Django">Django</option>
					<option value="Laravel">Laravel</option>
					<option value="Flask">Flask</option>
				</select>
			</div>
		)
	}
}

export default FrameworkFilter;