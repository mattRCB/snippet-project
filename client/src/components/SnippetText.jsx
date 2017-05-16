import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles';



const SnippetText = (props) => (		
	<div className="SnippetText">
		<SyntaxHighlighter
			customStyle={{padding: 2 + 'vw', fontSize: 1.25 + 'em'}}
			showLineNumbers={false}
			style={monokai}>{props.snippetText}
		</SyntaxHighlighter>
	</div>
)

SnippetText.propTypes = {
	snippetText: React.PropTypes.string.isRequired
}

export default SnippetText;

