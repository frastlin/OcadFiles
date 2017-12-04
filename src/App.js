import React, { Component } from 'react';
import { Switch, Route, Link, } from 'react-router-dom';

import Journal from './scenes/wcag_journal'
import Header from './components/header'

const header_links = [
	['/', 'Home'],
	['/journal', 'WCAG Journal'],
]

function Home(){
return <p>Welcome to Brandon's Ocad website. Please select the project you wish to see from the above links.</p>
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
		<Header links={header_links} page_header="true" />

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