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
		fetch('https://snipstr.herokuapp.com/addsnippet', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({title: "Snippet Test2", desc: "This is a another description"})
		}).then((savedSnippet) => {
			
		})
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
				</Modal>
			</div>
		)
	}
}

export default Header;
