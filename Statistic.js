import React from 'react';

export default class Statistic extends React.Component{
	render(){

		var statistic = this.props.statistic;

		return (
			<div className="col-md-4">
			<h2>Statistic</h2>
			<div>
			<table className="table table-striped">
			<tbody>
			<tr><td><strong>Real name</strong></td><td>{statistic.realName}</td></tr>
			<tr><td>Nickname(s)</td><td>{statistic.nickName}</td></tr>
			<tr><td>Rated at</td><td>{statistic.ratedAt}</td></tr>
			<tr><td>Height</td><td>{statistic.height}</td></tr>
			<tr><td>Reach</td><td>{statistic.reach}</td></tr>
			<tr><td>Nationality</td><td>{statistic.nationality}</td></tr>
			<tr><td>Born</td><td>{statistic.born}</td></tr>
			<tr><td>Stance</td><td>{statistic.stance}</td></tr>
			<tr><td>Total fights</td><td>{statistic.totalFights}</td></tr>
			<tr><td>Wins</td><td>{statistic.wins}</td></tr>
			<tr><td>Wins by KO</td><td>{statistic.winsByKO}</td></tr>
			<tr><td>Losses</td><td>{statistic.losses}</td></tr>
			<tr><td>Draws</td><td>{statistic.draws}</td></tr>
			</tbody>
			</table>
			</div>
			</div>
			);
	}
}