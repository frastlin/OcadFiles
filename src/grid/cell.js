import React, { Component } from 'react'

/*
<Grid
	data=[{data}] - data is checked for the property of dimensions and if it is, then a blank grid is created. else map is run.
	headers={header_list}
	onCellExit(index, old_cell, new_cell)={onCellExit}
	onCellEnter(index, old_cell, new_cell)={onCellEnter}
	onEdge(index, cell, new_index) - is run when the edge of the grid is reached
	onClick={onclick}
	getCell(row, column) - returns the cell
	headerColumn="true"
	headerRow="True"
	init={function(this)
	cellObj={type: "div", props: {role: "gridcell"}},
	rowObj={type: "div", props: {"role": "row"}}
	gridObj={type: "div", props: {"role": "grid"}},
	columnHeaderObj: {type: "div", props: {role: "columnheader"}},
	rowHeaderObj: 

/>

class Grid = {
	grid [[],[],[]]

There will be a grid in this.state that will be generated. each cell will have the following methods:
cell ={
	getValue() - returns the exact value
 	setValue(value) - sets the value of the cell
	setCell(new_property_obj)
	getCell(list_of_properties)
	getIndex: [row, column]
	getElement
	type
*/

class Cell extends Component{
	static defaultProps = {
		type: "div",
		props: {role: "gridcell", tabIndex: "-1"},
		value: "",
		handleKeyDown: (e)=>{},
		getRef: (ref, cell)=>{},
		onEnter: (cellObj)=>{},
		onExit: (cellObj)=>{},
	}

	constructor(props){
		super(props)
		this.state = {
			value: props.value,
			index: props.index,
			tabIndex: this.props.props.tagIndex,
		}
		this.setValue = this.setValue.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this._getRef = this._getRef.bind(this)
//		let extra_config = {tabIndex: this.state.tabIndex}
		let element_props = {}
		Object.assign(element_props, this.getHandlers(), props.props)
		this.element = React.createElement(this.props.type, element_props, this.state.value)
	}

	getHandlers(){
		return {
			onKeyDown: this.handleKeyDown,
			ref: this._getRef,
		}
	}

	_getRef(el){
		this.ref = el
		this.props.getRef(el, this, this.state.index)
	}

	getRef(){
		return this.ref
	}

	handleKeyDown(e){
		this.props.handleKeyDown(e, this, this.getIndex())
	}

	focus(){
		this.props.onEnter(this)
		this.ref.setAttribute('tabindex', "0")
		this.ref.focus()
	}

	unfocus(){
		this.props.onExit(this)
//		this.setState({tabIndex: "-1"})
		this.ref.setAttribute('tabindex', "-1")
	}

	getValue(){
		return this.state.value
	}

	getIndex(){
		return this.state.index
	}

	setValue(value){
		this.setState({value: value})
	}

	render(){
		return(
			this.element
		)
	}
}

export default Cell