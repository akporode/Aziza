import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import About from './About';
import Home from './home';
import $script from 'scriptjs'

$script('//platform.twitter.com/widgets.js', 'twitter-widgets')

ReactDOM.render(
	<Router history={browserHistory}>
	<Route path="/" component={App}>
	 <IndexRoute component={Home}/>
		<Route path="/about" component={About}/>
	</Route>
	</Router>,
	document.getElementById('app')
	);