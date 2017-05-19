import React, { Component } from 'react';
import '../assets/stylesheets/base.scss';

import Modal from 'react-modal';
Modal.setAppElement('#root');

class Header extends Component {
	constructor() {
		super();

		this.state = {
			showModal: false
		}

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleSubmitSnippet = this.handleSubmitSnippet.bind(this);
	}

	handleOpenModal () {
		this.setState({ showModal: true });
	}
	  
	handleCloseModal () {
		this.setState({ showModal: false });
	}
	handleSubmitSnippet(evt) {
		let snipbody = `$("body").on('DOMSubtreeModified', "mydiv", function() { });`
		fetch('https://snipstr.herokuapp.com/addsnippet', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(
				{
					title: "DOMSubtreeModified",
					desc: "Jquery .on() DOM updates. Can tie re-rendering of elements to each other without frontend framework.",
					body: snipbody,
					type: "public",
					lang: "JavaScript",
					framework: "JQuery",
					tags: []
				}
		)})
		.then(savedSnippet => savedSnippet.json())
		.then(savedSnippet => console.log(savedSnippet))

		.then((savedSnippet) => { //we do this because the savedSong will have an _id while newSong won't 
			let snippets = [...this.state.snippets, savedSnippet];
			this.setState({
				snippets
			});
		})

		this.handleCloseModal()
	}

	render() {
		return (
			<div className="Header">
				<button className="addButton" onClick={this.handleOpenModal}>Add Snippet</button>
				<Modal 
					isOpen={this.state.showModal}
					contentLabel="onRequestClose Example"
					onRequestClose={this.handleCloseModal}
					className="modal"
					overlayClassName="overlay"
				>
					{/* <ModalContent handleSubmit={this.handleSubmitSnippet} edit={false}/> */}
					<p>Add a snippet:</p>
					<button onClick={this.handleCloseModal}>Cancel</button>
					<button onClick={this.handleSubmitSnippet}>Save</button>
				</Modal>
			</div>
		)
	}
}

export default Header;
