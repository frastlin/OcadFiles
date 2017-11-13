import React, { Component } from 'react'

import Cell from './cell'
import Row from './row'

import sounds from './sounds'

class Grid extends Component {
	static defaultProps = {
		type: "div",
		props: {role: "grid", "aria-readonly": "true"},
		handleKeyDown: (e, cellObject)=>{},
		movement_keys: {"ArrowRight": "right", "ArrowUp": "up", "ArrowLeft": "left", "ArrowDown": "down"},
		headerCell: "false",
	}

	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.onEnter = this.onEnter.bind(this)
		this.onExit = this.onExit.bind(this)
		this.getRef = this.getRef.bind(this)
		this.headers = this.props.headers || Object.keys(this.props.data[0])
		this.grid = []
		this.cellGrid = this.generateGrid()
		this.rowGrid = this.generateRowGrid(this.cellGrid)
		this.element = React.createElement(this.props.type, this.props.props, this.rowGrid)
		this.state = {
			current_focus: [0, 0],
		}
	}

	generateGrid(){
		let grid = []
		let plusIndex = 0
		if(this.props.headerRow === "true"){
			grid.push(this.getHeaderRow())
			plusIndex = 1
		}
		grid = grid.concat(this.props.data.map((r, ri)=>{
			ri += plusIndex
			return this.headers.map((c, ci)=>{
				return <Cell 
					value={r[c]}
					index={[ri, ci]}
					handleKeyDown={this.handleKeyDown}
					key={`${ri}${ci}`}
					getRef= {this.getRef}
					onEnter = {this.onEnter}
					onExit = {this.onExit}
				/>
			})
		}))
		return grid
	}

	getRef(ref, cell, index){
		let [x,y] = index
		if(!this.grid[x]){
			this.grid[x] = []
		}
		this.grid[x][y] = cell
	}

	generateRowGrid(cellGrid){
		return cellGrid.map((r, i)=>{
			return <Row
				value={r}
				index={i}
				key={i}
			/>
		})
	}

	getHeaderRow(){
		if(this.props.headerRow){
			return this.headers.map((h, i)=>
				<Cell
					value={h}
					props={{role: "columnheader", tabIndex: "-1"}}
					index={[0, i]}
					handleKeyDown={this.handleKeyDown}
					key={`0${i}`}
					getRef={this.getRef}
				/>)
		}
	}

	onEnter(cellObj){
		let [r, c] = cellObj.getIndex()
		if(r > 0){
			sounds.water.play()
		}
		if(r == 2 && c == 1){
			sounds.wind.play()
			this.props.spk("Hurricane")
		}
	}

	onExit(cellObj){
	}

	move(key, cellObj, index){
		let movement = this.props.movement_keys[key]
		if(!movement) return
		let [x, y] = cellObj.getIndex()
		let newCell
		switch(movement){
			case "left":
				newCell = this.getCell(x, y-1)
				break
			case "right":
				newCell = this.getCell(x, y+1)
				break
			case "up":
				newCell = this.getCell(x-1, y)
				break
			case "down":
				newCell = this.getCell(x+1, y)
				break
			default:
				return
		}
		if(newCell){
			cellObj.unfocus()
			newCell.focus()
			this.setState({current_cell: newCell.getIndex()})
			return newCell
		} else {
			this.props.spk("Edge of map")
		}
	}

	handleKeyDown(e, cellObj, index){
		if(this.move(e.key, cellObj, index)) e.preventDefault()
		this.props.handleKeyDown(e, cellObj, index)
	}

	handleChange(e){
	}

	render(){
		return(
			this.element
		)
	}

	getCell(x, y){
		if(this.grid[x]){
			return this.grid[x][y]
		}
	}

}


export default Grid