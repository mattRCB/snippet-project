import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';



class SnippetText extends Component {
	constructor() {
		super();

	}

	render() {
		const codeString = '(num) => num + 1';
		return (
			<div className="SnippetText">
				<SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>;
			</div>
		)
	}
}

export default SnippetText;

