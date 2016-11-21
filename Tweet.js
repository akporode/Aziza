import React from 'react';
import $script from 'scriptjs'

export default class Tweet extends  React.Component{

	
	componentWillUnmount() {
		this.willUnmount = true
	}
	componentDidMount() {
		 const { widgetWrapper } = this.refs //this is the current DOM node
		 $script.ready('twitter-widgets', () => {

      // Create widget
      //this.props.ready(window.twttr, widgetWrapper, ::this.done)
      window.twttr.widgets.load(widgetWrapper);

     
      //2. Re-render the widget whenever you come to that page i.e. you would delete the empty iframe,
      // replace it with the original embed code[a], then call twitter.widgets.load().

      //TODO: Need to delete the empty iframe and to gracefully unmount

  			})
		}

	

		render(){

			var tweetInstance = this.props.tweet;
			
			return (
				<div className="col-md-4">
				<h2>Tweet</h2>
				<a ref="widgetWrapper" className="twitter-timeline" href={tweetInstance.url}
				data-height="520" data-chrome="noheader"></a> 
				</div>
				);
		}
	}