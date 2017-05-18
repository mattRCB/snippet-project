import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';
import PrivacyFilter from './PrivacyFilter';
import LanguageFilter from './LanguageFilter';
import FrameworkFilter from './FrameworkFilter';
import SearchFilter from './SearchFilter';
import TagFilter from './TagFilter';


const FilterBoard = (props) => (
	<div className="FilterBoard">
		<PrivacyFilter />
		<LanguageFilter lang={props.lang} chngLangFilter={props.chngLangFilter}/>
		<FrameworkFilter />
		<TagFilter />
		<SearchFilter />
	</div>
)

FilterBoard.propTypes = {
	lang: React.PropTypes.string.isRequired,
	chngLangFilter: React.PropTypes.func.isRequired
}

export default FilterBoard;
