import React, { Component } from 'react';

export default class Section extends Component{
	render(){
		let contents = this.props.expanded ? this.props.contents : ""
		return(
		<div>
		<li><h2><button data-journal-id={this.props.title} onClick={this.props.handleClick} aria-expanded={this.props.expanded}>{this.props.title}</button></h2></li>
		<p>{contents}</p>
		</div>
		)
	}
}
