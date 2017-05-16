import React from 'react'
import PropTypes from 'prop-types'
import '../assets/stylesheets/base.scss'
import ListItem from './ListItem'

const SelectorList = (props) => (
	<div className="SelectorContainer">
		<div className="SelectorList">
			{props.snippets.map((snippet) => (
				<ListItem
					selectSnippet={props.selectSnippet}
					key={snippet.id}
					snippet={snippet}
					crntSelection={props.crntSelection}
				/>
			))}
			
		</div>
	</div>
)

SelectorList.propTypes = {
	selectSnippet: React.PropTypes.func.isRequired
}

export default SelectorList