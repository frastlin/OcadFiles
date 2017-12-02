import React, { Component } from 'react';

import Journal from './wcag_journal'


class App extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}


	render() {
		return (
		<div>
		<Journal />
			</div>
		);
	}
}

export default App;