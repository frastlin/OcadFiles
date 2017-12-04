import React, { Component } from 'react';
import sections from './sections'
import Section from './section'


export default class Journal extends Component{
	constructor(props){
		super(props)
		this.state = {
			expanded: -1
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		let id = e.target.getAttribute('data-journal-id')
		if(this.state.expanded === id){
			this.setState({expanded: null})
		} else {
			this.setState({ expanded: id})
		}
	}

	render(){
		return(
		<div>
			<p>This journal follows the Design spiral.</p>
			<h1>Design spiral</h1>
			<ul style={{listStyleType: 'none'}}>
			{sections.map((s, i)=>{
				let expanded = this.state.expanded === s.title
				return <Section key={s.title} handleClick={this.handleClick} expanded={expanded} title={s.title} contents={s.contents} />
			})}
			</ul>
			</div>
		)
	}
}