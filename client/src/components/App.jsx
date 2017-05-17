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
				{
					body
					:
					"import SelectorList from './SelectorList'",
					desc
					:
					"This is a description",
					title
					:
					"Snippet Test",
					_id
					:
					"590cddce8cae850011340d33"
				}
			]
		}

		// REMEMBER TO .bind(this) ON ALL METHODS HERE:
		this.selectSnippet = this.selectSnippet.bind(this);

	}

	componentDidMount() {
		fetch('https://snipstr.herokuapp.com/snippets')
			.then(res => res.json())
			.then(snippets => this.setState({snippets}))
	}

	componentDidUpdate() {
		console.log(this.state.selectedSnippetID)
		console.log(this.state.snippets)

	}

	selectSnippet(evt) {
		let snippetId = evt.target.getAttribute("data-snippetid")
		this.setState({ selectedSnippetID: snippetId });
	}


	render() {
		return (
			<div className="App">
				<Header />
				<FilterBoard />
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


{/*
		fetch('https://snipstr.herokuapp.com/addsnippet', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: "Snippet Test2",
				body: "",
				desc: "This is a another description"
				type: "public",
				lang: ""
			})
		})
*/}
