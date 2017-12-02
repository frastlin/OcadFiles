import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Journal from './wcag_journal'

function Home(){
	return <p>This is home</p>
}

function PageNotFound(){
	return <p>Sorry, there is no page at this URL</p>
}

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}


	render() {
		return (
		<div>

		<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/journal" component={Journal} />
		<Route component={PageNotFound} />
		</Switch>
			</div>
		);
	}
}

export default App;