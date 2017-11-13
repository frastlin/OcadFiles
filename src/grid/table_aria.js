import React, { Component } from 'react'
import './grid.css'

function HeaderRow(props){
	return(
		<div
		role="columnheader"
		tabIndex="-1"
		id={props.index}
		onKeyDown={(e)=>props.handle(e, 0, props.index)}
		ref={(r)=>props.grid[0][props.index] = r}>
			{props.value}
		</div>
	)
}

function Row(props){
	props.grid.push([])
	return(
	<div role="row">
	{props.headers.map((h, columnIndex)=>
		<div
			role="gridcell"
			aria-selected="false"
			onKeyDown={(e)=>props.handle(e, props.rowIndex, columnIndex)}
			tabIndex="-1"
			ref={(r)=>props.grid[props.rowIndex][columnIndex] = r}
			key={props.rowIndex.toString() + columnIndex.toString()}>
				{props.value[h]}
			</div>
	)}
	</div>
	)
}

class Table extends Component {
	constructor(props){
		super(props)
		this.state = {
			current_row: [0,0]
		}
		this.data = props.data
		this.headers = Object.keys(props.data[0])
		this.grid = [[]]
		this.speak_element  = null
		this.handleKeyDown = this.handleKeyDown.bind(this)
	}

	handleKeyDown(e, rowIndex, columnIndex){
		let cell = this.getNextCell(this.grid, e.key, rowIndex, columnIndex)
		if(!cell) return 0
		this.grid[rowIndex][columnIndex].setAttribute('tabindex', -1)
		cell.focus()
		cell.setAttribute('tabindex', 0)
		//The next line is needed if one is using normal HTML.
//		this.spk(cell.innerHTML)
		e.preventDefault()
	}

	spk(text){
		this.speak_element.innerHTML = text
	}

	getNextCell(grid, key, row, column){
		var cell = undefined
		switch(key){
			case "ArrowUp":
				if(row -1 < 0){
					cell = "edge"
				} else {
					cell = grid[row-1][column]
				}
				break
			case "ArrowDown":
				if(row+1 === grid.length){
					cell = "edge"
				} else {
					cell = grid[row+1][column]
				}
				break
			case "ArrowLeft":
				cell = grid[row][column-1] || "edge"
				break
			case "ArrowRight":
				cell = grid[row][column+1] || "edge"
				break
			default:
				return cell
		}
		if(cell === "edge"){
			this.spk("Edge of table")
			cell = undefined
		}
		return cell
	}

	render(){
		return(
		<div>
		<h1>This is a grid</h1>
		<div aria-readonly="true" role="grid"  aria-labelledby="Grid" className="data">
		<div role="rowgroup">
		<div role="row">
		{this.headers.map((h, i)=><HeaderRow key={"h" + i} handle={this.handleKeyDown} grid={this.grid} index={i} value={h} />)}
		</div>
		{this.props.data.map((item, index)=>{
			index += 1
			return <Row value={item} grid={this.grid} handle={this.handleKeyDown} key={index.toString()} rowIndex={index} headers={this.headers} />
		})}
		</div>
		</div>
		<p role="status" id="speak" ref={(r)=>this.speak_element = r}></p>
		</div>
	)
	}
}

export default Table