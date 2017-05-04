import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';



class ListItem extends Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div className="ListItem">
				<div className="left">
					<div className="title">Snippet Title</div>
					<p className="desc">Description text for this particular Snippet. Need to see what something longer might look like.</p>
				</div>
				<div className="right">
					<div className="type">Private</div>
					<div className="lang">JavaScript</div>
				</div>
			</div>
		)
	}
}

export default ListItem;