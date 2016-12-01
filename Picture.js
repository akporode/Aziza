import React from 'react';

export default class Picture extends React.Component{
	render(){
		var picture = this.props.image;
		return (
			<div className="col-md-4">
			<h2>Picture</h2>
			 <img src ={picture.src} style={{width:100 +"%"}} className="img-thumbnail"/>
			</div>
			);
	}
}
