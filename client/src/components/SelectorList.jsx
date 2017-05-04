import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';
import ListItem from './ListItem';

class SelectorList extends Component {
	constructor() {
		super();

	}

	render() {
		return (
			<div className="SelectorList">
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
				<ListItem />
			</div>
		)
	}
}

export default SelectorList;