import React from 'react'
import PropTypes from 'prop-types'
import '../assets/stylesheets/base.scss'



const LanguageFilter = (props) => (
	<div id="lang" value={props.lang} onChange={props.chngLangFilter} className="LanguageFilter">
		<h5>Language:</h5>
		<select>
			<option value="All">All</option>
			<option value="PHP">PHP</option>
			<option value="JavaScript">JavaScript</option>
			<option value="Ruby">Ruby</option>
			<option value="Python">Python</option>
			<option value="Java">Java</option>
			<option value="C++">C++</option>
		</select>
	</div>
)

LanguageFilter.propTypes = {
	lang: React.PropTypes.string.isRequired,
	chngLangFilter: React.PropTypes.func.isRequired
}

export default LanguageFilter
