import React, { Component } from 'react';
import sounds from './sounds'

class Scape extends Component{
	render(){
		return(
			<button onClick={(e)=>this.handleClick(e, sounds['hello'])} onKeyDown={(e)=>this.handleKeyDown(e, sounds['hello'])}>Click me</button>
		)
	}

	handleClick(e, sound){
		sound.play()
	}

	handleKeyDown(e, sound){
		let location = sound.panning.location
		switch(e.key){
			case 'ArrowUp':
				console.log(location)
			sound.setPanning([location[0]+0.1,0,0])
			break
		case 'ArrowDown':
			console.log(sound.panning.location)
		default:
			return
		}
	}
}

export default Scape
