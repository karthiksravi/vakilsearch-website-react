import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import Link from 'next/link';


class Cv extends React.Component{
	
	render() {
		// debugger
		const headingsArray = ['Apple', 'Banana', 'Orange']
		var activities = [
		    ['Work', '9'],
		    ['Eat', '2'],
		    ['Commute', 2],
		    ['Play Game', 2],
		    ['Sleep', 7]
		];
		this.state = { para: "hello", h1: "some"}
		var { para } = this.state;
		const { h1 } = this.state;
		// console.log(activities[0][1]);
		return(
	  	<BaseLayout>
		  	<h1>New CV Page</h1>
			<ul className="parentDiv">
		      {headingsArray.map((heading, index) => 
		      	<Link href={`/portfolios?title=${heading}`}>
		      		<li id={index} key={index}>{heading}</li>
		      	</Link>
		      )}
		    </ul>
		    <ul className="parentDivnew">
		      {activities.map((activity, index) => <li id={index} className={index} key={index}>{activity}</li>)}
		    </ul>
		  	<div>
		  		<h1>{ para }</h1>
		  		<h1>{ h1 }</h1>
		  	</div>
	  	</BaseLayout>
	  	)
	}
}
export default Cv;