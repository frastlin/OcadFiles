import React, { Component } from 'react'

function HeaderRow(props){
	return(
		<th
		tabIndex="-1"
		id={props.index}
		onKeyDown={(e)=>props.handle(e, 0, props.index)}
		ref={(r)=>props.grid[0][props.index] = r}>
			{props.value}
		</th>
	)
}

function Row(props){
	props.grid.push([])
	return(
	<tr>
	{props.headers.map((h, columnIndex)=>
		<div
		role="gridcell"
			onKeyDown={(e)=>props.handle(e, props.rowIndex, columnIndex)}
			tabIndex="-1"
			ref={(r)=>props.grid[props.rowIndex][columnIndex] = r}
			key={props.rowIndex.toString() + columnIndex.toString()}>
				<a href="#">{props.value[h]}</a>
			</div>
	)}
	</tr>
	)
}

class Table extends Component {
	constructor(props){
		super(props)
		this.data = props.data
		this.headers = Object.keys(props.data[0])
		this.grid = [[]]
		this.speak_element  = null
		this.handleKeyDown = this.handleKeyDown.bind(this)
	}

	handleKeyDown(e, rowIndex, columnIndex){
		let cell = this.getNextCell(this.grid, e.key, rowIndex, columnIndex)
		let current_cell = this.grid[rowIndex][columnIndex]
		let obj = {
			current_cell,
			rowIndex,
			columnIndex,
			next_cell: cell
		}
		if(this.props.handleKeyDown){
			var stop = this.props.handleKeyDown(e, obj)
		}else{
			var stop = false
		}
		if(!cell || stop) return 0
		current_cell.setAttribute('tabindex', -1)
		if(cell.children[0]){
			cell = cell.children[0]
		} else {
			this.spk(cell.innerHTML)
		}
		cell.focus()
		cell.setAttribute('tabindex', 0)
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
		<table aria-labelledby="Grid" className="data">
		<tbody>
		<tr>
		{this.headers.map((h, i)=><HeaderRow key={"h" + i} handle={this.handleKeyDown} grid={this.grid} index={i} value={h} />)}
		</tr>
		{this.props.data.map((item, index)=>{
			index += 1
			return <Row value={item} grid={this.grid} handle={this.handleKeyDown} key={index.toString()} rowIndex={index} headers={this.headers} />
		})}
		</tbody>
		</table>
		<p role="status" id="speak" ref={(r)=>this.speak_element = r}></p>
		</div>
	)
	}
}

export default Table