import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import SuperComponent from '../components/SuperComponent';

class Index extends SuperComponent{
	

	static async getInitialProps() {
		let userData = {};
		try{
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
			userData = response.data;
		}catch(err){
			console.error(err);
		}

		return {initialData: [1,2,3,4], userData};
	}
	constructor(props){
		
		super(props);
		
		this.state = {
			title: 'i am index page'
		}
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
	updateTitle = () => {
		this.setState({title:'i am updated index page'});
	}

	render(){
		// debugger;
		const { title } = this.state;
		const { userData, initialData } = this.props;
		return(
		<BaseLayout>
		  	<h1>Welcome to Index Page</h1>
		  	<h2>{ title }</h2>		
		  	<h2>{ userData.title }</h2>		
		  	<button onClick={this.updateTitle}>Change Title</button>
	  	</BaseLayout>
	  	)
	}
}
export default Index;
// <Header title="I am a Header">
// 		  		<h1>I am a Headernew</h1>
// 		  	</Header>