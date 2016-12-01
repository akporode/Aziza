import React from 'react';
import { Link } from 'react-router';
import { IndexLink } from 'react-router';

export default class Navi extends React.Component {
	render() {
		return (
			<nav className="navbar">
			<div className="container">
			<div>
			<ul role="nav" className="nav navbar-nav">
			<li><IndexLink activeStyle={{color:'#53acff'}} to="/">Blog</IndexLink></li>
			<li><IndexLink activeStyle={{color:'#53acff'}} to="/boxer/1">Boxer</IndexLink></li>
			<li><IndexLink activeStyle={{color:'#53acff'}} to="/about">About</IndexLink></li>

			</ul>

			<div id="navbar" className="navbar-collapse collapse">
			<form className="navbar-form navbar-right">
			<div className="form-group">
			<input type="text" name="name" />
			<input type="submit" value="Submit" />
			</div>
			</form>
			</div>
			</div>
			</div>
			</nav>
			
			);
	}
}