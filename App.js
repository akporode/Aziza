import React from 'react';
import Navi from  './Navi';

export default class App extends React.Component {
	render() {
		return (
			<div>	
			<Navi />
			 {this.props.children}
			</div>
			);
	}
}