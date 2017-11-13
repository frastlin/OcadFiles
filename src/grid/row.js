import React, { Component } from 'react'

class Row extends Component{
	static defaultProps = {
		type: "div",
		props: {role: "row"}
	}

	constructor(props){
		super(props)
		this.element = React.createElement(this.props.type, this.props.props, this.props.value)
	}

	render(){
		return(
			this.element
		)
	}
}

export default Row