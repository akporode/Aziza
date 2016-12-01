import React from 'react';
import Header from './Header';
import BoxerProfileContent from './BoxerProfileContent';
import Footer from  './Footer';


export default class BoxerProfile extends React.Component  { 
	render(){
		//console.log("Boxing props " + this.props.params.boxerName);
	return (
     <div>
		<Header />
		<div className="container">
		<BoxerProfileContent boxerName={this.props.params.boxerName}/>
		<Footer />
		</div>
	</div>
	);
}
}