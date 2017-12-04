import React from 'react';
import { Route, Link } from 'react-router-dom';

const url_index = 0
const name_index = 1

var links = []

function get_name(url){
	if(url == '') url = '/'
	for(let i = 0; i < links.length; i++){
		if(url === links[i][url_index]) return links[i][name_index]
	}
}

/*
style="list-style-type: none;"
*/

function PageName(props){
	return <h1>{get_name(props.location.pathname) || "Page Not Found"}</h1>
}

function PageName2({ match }){
	//this function returns the last link in a full path name
	if(!match.isExact) return         <Route path={`${match.url === '/' ? '' : match.url}/:path`} component={PageName} />
  const title = get_name(match.url.split('/').slice(-1))
return <h1>{title || 'Page Not Found'}</h1>
}

export default function Header(props){
	links = props.links
	let link_list = links.map((l)=>
		<Link to={l[url_index]}>{l[name_index]}</Link>
	)

	return <div>
		{link_list}
	<Route path="/" component={PageName} />
</div>
}
