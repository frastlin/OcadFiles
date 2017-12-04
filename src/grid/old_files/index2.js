import React, { Component } from 'react'

//the different tables
//import AriaTable from './table_aria'
//import Table_html from './table_html'
//import CustomTable from './table_custom'
import Table from './custom_table'

class Grid extends Component{
	handleKeyDown(e, el){
		return
	}

	render(){
		return(
		<Table data={this.props.data} />
		)
	}
}


export default Grid