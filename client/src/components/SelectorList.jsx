import React from 'react';
import '../assets/stylesheets/base.scss';
import ListItem from './ListItem';

const SelectorList = (props) => (
	<div className="SelectorContainer">
		<div className="SelectorList">
			{props.snippets.map((snippet) => (
				<ListItem key={snippet.id} snippet={snippet} />
			))}
			
		</div>
	</div>
)

export default SelectorList;