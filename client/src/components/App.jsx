import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FilterBoard from './FilterBoard'
import SelectorList from './SelectorList'
import SnippetWell from './SnippetWell'
import Header from './Header'

import '../assets/stylesheets/base.scss'


class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedSnippetID: "590cddce8cae850011340d33",
			snippets: [
				{ body: "import SelectorList from './SelectorList'", desc: "This is a description", title: "Snippet Test", _id: "590cddce8cae850011340d33"
				}
			],
			langFilter: "All",
			frameworkFilter: "All"
		}

		// REMEMBER TO .bind(this) ON ALL METHODS HERE:
		this.selectSnippet = this.selectSnippet.bind(this)
		this.chngLangFilter = this.chngLangFilter.bind(this)
		this.chngFrameworkFilter = this.chngFrameworkFilter.bind(this)

	}

	componentDidMount() {
		fetch('https://snipstr.herokuapp.com/snippets')
			.then(res => res.json())
			.then(snippets => this.setState({snippets}))
	}

	componentDidUpdate() {
		console.log(this.state.snippets)
		console.log(`selectedSnippetID: ${this.state.selectedSnippetID}`)
		console.log(`langFilter: ${this.state.langFilter}`)
		console.log(`frameworkFilter: ${this.state.frameworkFilter}`)
	}

	selectSnippet(evt) {
		let snippetId = evt.target.getAttribute("data-snippetid")
		this.setState({ selectedSnippetID: snippetId })
	}

	addSnippet(evt) {}

	chngLangFilter(evt) {
		this.setState({ langFilter: evt.target.value })
	}

	chngFrameworkFilter(evt) {
		this.setState({ frameworkFilter: evt.target.value })
	}

	render() {
		return (
			<div className="App">
				<Header />
				<FilterBoard
					lang={this.state.langFilter}
					chngLangFilter={this.chngLangFilter}
					framework={this.state.frameworkFilter}
					chngFrameworkFilter={this.chngFrameworkFilter}
				/>
				<SelectorList
					selectSnippet={this.selectSnippet}
					snippets={this.state.snippets}
					crntSelection={this.state.selectedSnippetID}
				/>

{/* NEED A CONDITIONAL WAY TO ALLOW <SnippetWell/> TO GET RENDERED ON INITIAL LOAD, 
    I.E. BEFORE THE SNIPPETCOLLECTION IS POPULATED IN componentDidMount....
    MAYBE THERE IS AN EARLIER LIFECYCLE METHOD I COULD USE INSTEAD OF componentDidMount....
    Ultimately, must remove the static defaults I've put into STATE.
 */}
				<SnippetWell
					snippetText={this.state.snippets.find(snippet => snippet._id == this.state.selectedSnippetID).body}
				/>
			</div>
		)
	}
}

export default App


