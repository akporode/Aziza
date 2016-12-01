import React from 'react';

import BoxingRecordPanel from './BoxingRecordPanel';

   
export default class BottomHalf extends React.Component {


	
	render() {
   



		return (
			<div className="row">
			<div className="col-md-12">
			<div className="panel-group">
			<div className="panel panel-default">
			<div className="panel-heading"><h3>Professional Career</h3></div>
			<div className="panel-body">Panel Content</div>
			</div>
			<BoxingRecordPanel/>
			<div className="panel panel-default">
			<div className="panel-heading"><h3>Titles</h3></div>
			<div className="panel-body">Panel Content</div>
			</div>
			</div>
			</div>
			</div>
			);
	}
}

