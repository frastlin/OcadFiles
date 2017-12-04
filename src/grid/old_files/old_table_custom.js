import React, { Component } from 'react'
import './grid.css'

function Cell(props){
	return(
	<div
		className="cell"
		role="gridcell"
	>
		{props.content}
	</div>
	)
}

function HeaderCell(props){
	return(
	<div
		className="headerCell"
	>
		{props.content}
	</div>
	)
}

function Row(props){
	return(
		<div
		className="row"
		role="row"
	>
			{props.content}
		</div>
	)
}

class Table extends Component{
	constructor(props){
		super(props)
		this.grid = []
		this.headers = this.props.headers || Object.keys(this.props.data[0])
		this.handleKeyDown = this.handleKeyDown.bind(this)
	}

	handleKeyDown(e, columnIndex, rowIndex){
		console.log(e.key)
		if(e.key === "ArrowUp"){
			this.props.spk("Hello!")
			console.log("Ran")
		}
	}

	render(){
		return(
			<div className="grid" role="grid" onKeyDown={this.handleKeyDown}>
				{this.props.data.map((r, i)=>{
					let row_content = this.generateRow(r, i)
					return <Row content={row_content} key={i} />
				})}
			</div>
		)
	}

	generateRow(r, i){
		if(i === 0 && this.props.headerColumn){
			return this.headers.map((h, hi)=>{
				let cell = <HeaderCell content={h} key={`${i}${hi}`} />
				this.add_cell(cell, i, hi, true)
				return cell
			})
		}else{
			return this.headers.map((h, ci)=>{
				//there should be a check here to make sure the cell is not a header row
				let cell = <Cell handleKeyDown={this.handleKeyDown} content={r[h]} key={`${i}${ci}`} />
				this.add_cell(cell, i, ci, false)
				return cell
			})
		}
	}

	add_cell(cell, rowIndex, columnIndex, isHeader){
		//add to this.grid
		return
	}
}


export default Table