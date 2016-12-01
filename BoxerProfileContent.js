import React from 'react';
import TopHalf from './TopHalf';
import BottomHalf from './BottomHalf';

export default class BoxerProfileContent extends React.Component{

	render(){
		//console.log("BoxerProfileContent props " + this.props.boxerName);
		return (
			<div>
			<TopHalf boxerName ={this.props.boxerName} />
			<BottomHalf />
			</div>
			);
	}
}