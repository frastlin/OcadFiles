import React, { Component } from 'react';

import Grid from './grid';
//import Soundscape from './soundscape';

var data2 = [
	{
		'name': 'Fred',
		'age': 22,
	},
	{
		'name': 'Sam',
		'age': 42,
	},
	{
		'name': 'Claudia',
		'age': 24
	}
]

var data = [
	{
		c1: "Southern boarder of Texas",
		c2: "Southern boarder of Texas",
		c3: "Southern boarder of Louisiana",
	},
	{
		c1: "Northern Golf",
		c2: "Northern Golf",
		c3: "Northern Golf",
	},
	{
		c1: "Center Golf",
		c2: "Center Golf",
		c3: "Center Golf",
	},
	{
		c1: "Southern Golf",
		c2: "Southern Golf",
		c3: "Southern Golf",
	},
]



class App extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.spk = this.spk.bind(this)
		this.spk_ref = null
	}

	handleKeyDown(e, cellObj){
		
	}

	render() {
		return (
		<div>
			<Grid data={data} handleKeyDown={this.handleKeyDown} headerRow="false" spk={this.spk} />
			<p role="status" ref={(el)=>this.spk_ref = el} className="visual_hidden">{this.state.spk}</p>
			</div>
		);
	}

	spk(text){
		this.spk_ref.innerHTML = text
	}
}

export default App;