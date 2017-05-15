import React from 'react'
import '../assets/stylesheets/base.scss'

const ListItem = (props) => (
	<div className="ListItem">
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
	
export default ListItem
