import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';


class Index extends SuperComponent{
	constructor(props){
		
		super(props);
		
		this.state = {
			title: 'i am index page'
		}
		console.log('constructor');
	}
	componentDidMount(){
		console.log('componentDidMount');
	}
	componentDidUpdate(){
		console.log('componentDidUpdate');
	}
	componentWillUnmount(){
		console.log('componentWillUnmount');
	}
	updateTitle(){
		this.setState({title:'i am updated index page'});
	}

	render(){
		debugger;
		const { title } = this.state;
		return(
		<BaseLayout>
		  	<h1>Welcome to Index Page</h1>
		  	<h2>{ title }</h2>	
		  	<button onClick={ () => this.updateTitle() }>Change Title</button>
	  	</BaseLayout>
	  	)
	}
}
export default Index;
// <Header title="I am a Header">
// 		  		<h1>I am a Headernew</h1>
// 		  	</Header>