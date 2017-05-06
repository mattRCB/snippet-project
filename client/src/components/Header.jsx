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
	}

	handleOpenModal () {
		this.setState({ showModal: true });
	}
	  
	handleCloseModal () {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<div className="Header">
				<button onClick={this.handleOpenModal}>Trigger Modal</button>
				<Modal 
					isOpen={this.state.showModal}
					contentLabel="onRequestClose Example"
					onRequestClose={this.handleCloseModal}
					className="modal"
					overlayClassName="overlay"
				>
					<p>Modal text!</p>
					<button onClick={this.handleCloseModal}>Close Modal</button>
				</Modal>
			</div>
		)
	}
}

export default Header;
