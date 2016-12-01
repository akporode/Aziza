import React from 'react';
import Navi from './Navi';

export default class Container extends React.Component{
	
	render(){
	  return (
	  <div>
	  <Navi />
	   {this.props.children}
	   </div>
	  );
	}
}