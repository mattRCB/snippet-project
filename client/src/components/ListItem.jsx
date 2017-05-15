import React from 'react'
import PropTypes from 'prop-types'
import '../assets/stylesheets/base.scss'

const ListItem = (props) => (
	<div className="ListItem" onClick={props.selectSnippet}>
		<div className="left">
			<div className="title">{props.snippet.title}</div>
			<div className="desc">{props.snippet.desc}</div>
		</div>
		<div className="right">
			<div className="type">{props.snippet.type}</div>
			<div className="lang">{props.snippet.lang}</div>
		</div>
	</div>
)

ListItem.propTypes = {
	snippet: React.PropTypes.object.isRequired,
	selectSnippet: React.PropTypes.func.isRequired

}
	
export default ListItem
