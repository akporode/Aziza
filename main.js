import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import $script from 'scriptjs'

$script('//platform.twitter.com/widgets.js', 'twitter-widgets')

ReactDOM.render(
	<App />,
	document.getElementById('app')
	);