import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';
import SnippetText from './SnippetText';


const SnippetWell = (props) => (
	<div className="SnippetWell">
		<SnippetText snippetText={props.snippetText}/>
	</div>
)

SnippetWell.propTypes = {
	snippetText: React.PropTypes.string.isRequired
}

export default SnippetWell;