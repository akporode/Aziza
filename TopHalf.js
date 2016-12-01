import React from 'react';
import Picture from './Picture';
import Statistic from './Statistic';
import Tweet from  './Tweet';

export default class TopHalf extends React.Component {


	render() {

		//console.log("TopHalf Boxing props " + this.props.boxerName);
		
		var rows = [];
		var box = boxProfiles[this.props.boxerName];

		return (<div>			
			<div className="row">
				 <Picture image={box.image}/>
				<Statistic statistic={box.statistic} />
				 <Tweet tweet={box.tweet}/>
			</div>
		</div>
		);



	}
}

var boxProfiles = [
{
	image :{
		src : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Sergey_Kovalev-crop.jpg",
		alt : "Sergey_Kovalev-crop"
	},
	statistic : {
		realName: "Sergey Alexandrovich Kovalev",
		nickName: "Sergey_Kovalev-crop",
		ratedAt: "Light heavyweight",
		height:	"1.83 m (6 ft 0 in)",
		reach:	"183 cm (72 in)",
		nationality: "Russian",
		born:	"2 April 1983 (age 33) Kopeysk, Russian SFSR, Soviet Union (now Russia)",
		stance:	"Orthodox",
		totalFights :	"31",
		wins:	"30",
		winsByKO:	"26",
		losses:	"1",
		draws:	"1" 
	},
	tweet : {
		url:"https://twitter.com/KrusherKovalev"
	}
},
{
	image :{
		src : "https://upload.wikimedia.org/wikipedia/commons/e/ed/Andre_Ward.jpg",
		alt : "Andre Ward.jpg"
	},
	statistic : {
		realName: "Andre Ward",
		nickName: "S.O.G. (Son of God)",
		ratedAt: "Super middleweight,Light heavyweight",
		height:	"6 ft 0 in (183 cm)",
		reach:	"71 in (180 cm)",
		nationality: "American",
		born:	"February 23, 1984 (age 32) San Francisco, California, U.S.",
		stance:	"Orthodox",
		totalFights :	"31",
		wins:	"31",
		winsByKO:	"15",
		losses:	"0",
		draws:"0"
	},
	tweet : {
		url:"https://twitter.com/andreward"
	}
}
];

