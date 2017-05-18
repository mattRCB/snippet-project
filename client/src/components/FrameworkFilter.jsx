import React from 'react'
import PropTypes from 'prop-types'
import '../assets/stylesheets/base.scss'



const FrameworkFilter = (props) => (
	<div id="framework" value={props.framework} onChange={props.chngFrameworkFilter} className="FrameworkFilter">
		<h5>Framework:</h5>
		<select>
			<option value="All">All</option>
			<option value="ReactJS">ReactJS</option>
			<option value="Ruby on Rails">Ruby on Rails</option>
			<option value="Django">Django</option>
			<option value="Laravel">Laravel</option>
			<option value="Flask">Flask</option>
		</select>
	</div>
)

FrameworkFilter.propTypes = {
	framework: React.PropTypes.string.isRequired,
	chngFrameworkFilter: React.PropTypes.func.isRequired
}

export default FrameworkFilter