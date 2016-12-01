import React from 'react';
import BoxerProfile from './BoxerProfile';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import About from './About';
import Home from './Home';
import Container from './Container';
import Blog from './Blog';
import NotFound from './NotFound'


export default class App extends React.Component {
	render() {
		return (
		<Router history={browserHistory}>
		 	<Route path='/' component={Container}>
			  <IndexRoute component={Blog}/>
	     	  <Route path='/boxer(/:boxerName)' component={BoxerProfile}/>
	     	  <Route path='/about' component={About}/>
	     	  <Route path='*' component={NotFound} />
	     	</Route>
	    </Router>
			);
	
	}
}
