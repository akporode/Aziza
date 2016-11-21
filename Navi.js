import React from 'react';
import { Link } from 'react-router';
import { IndexLink } from 'react-router';

export default class Navi extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
			<div>
			<ul role="nav" className="nav navbar-nav">
			<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
			<li><Link to="/about">About</Link></li>
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