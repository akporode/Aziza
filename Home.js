import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from  './Footer';


export default class Home extends React.Component  { 
	render(){
	return (
	<div>
		<Header />
			<div className="container">
			<Content />
			<Footer />
			</div>
	</div>
	);
}
}