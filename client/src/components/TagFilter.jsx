import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';



class TagFilter extends Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div className="TagFilter">
				<h5>List Only Selected Tags:</h5>
					<label>
						<input type="checkbox" value="Frontend" />
						Frontend
					</label>
					<label>
						<input type="checkbox" value="Backend" />
						Backend
					</label>
					<label>
						<input type="checkbox" value="Database" />
						Database
					</label>
					<label>
						<input type="checkbox" value="Object-Oriented" />
						Object-oriented
					</label>
					<label>
						<input type="checkbox" value="AJAX" />
						AJAX
					</label>
					<label>
						<input type="checkbox" value="Web-Scraping" />
						Web-Scraping
					</label>
			</div>
		)
	}
}

export default TagFilter;