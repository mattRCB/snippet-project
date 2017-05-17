import React from 'react'
import PropTypes from 'prop-types'
import '../assets/stylesheets/base.scss'

const ListItem = (props) => (
	<div
		className="ListItem"
		className={(props.snippet._id == props.crntSelection) ? "selectedItem" : "ListItem"}
		data-snippetId={props.snippet._id}
		onClick={props.selectSnippet}
	>
		<div className="left" data-snippetId={props.snippet._id}>
			<div className="title" data-snippetId={props.snippet._id}>{props.snippet.title}</div>
			<div className="desc" data-snippetId={props.snippet._id}>{props.snippet.desc}</div>
		</div>
		<div className="right" data-snippetId={props.snippet._id}>
			<div className="type" data-snippetId={props.snippet._id}>{props.snippet.type}</div>
			<div className="lang" data-snippetId={props.snippet._id}>{props.snippet.lang}</div>
		</div>
	</div>
)

ListItem.propTypes = {
	snippet: React.PropTypes.object.isRequired,
	selectSnippet: React.PropTypes.func.isRequired

}
	
export default ListItem
