import React from 'react';
import TopHalf from './TopHalf';
import BottomHalf from './BottomHalf';

export default class Content extends React.Component{
	render(){
		return (
			<div>
			<TopHalf />
			<BottomHalf />
			</div>
			);
	}
}