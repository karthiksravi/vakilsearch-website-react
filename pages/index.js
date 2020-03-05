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
		this.state = { fullName: "karthik", email: "karthik@gmail.com" }
	}
	handleSubmit = (event) => {
		event.preventDefault()
		const data = this.state
		console.log("Name", data)
	}
	handleChange = (event) => {
		event.preventDefault()
		this.setState({
			fullName: event.target.value
		})
	}
	handleChange1 = (event) => {
		event.preventDefault()
		this.setState({
			email: event.target.value
		})
	}
	// componentDidMount(){
	// 	this.setState({
	// 		fullName: "justin"
	// 	})
	// }
	// componentDidUpdate(){
	// 	console.log('componentDidUpdate');
	// }
	// componentWillUnmount(){
	// 	console.log('componentWillUnmount');
	// }
	updateTitle = () => {
		this.setState({title:'i am updated index page'});
	}

	render(){
		const {fullName} = this.state;
		const {email} = this.state;
		const { userData, initialData } = this.props;
		return(
		<BaseLayout>
		  	<h1>Welcome to Index Page</h1>
		  	<p>Full name is: {fullName}</p>			
		  	<p>Full name is: {email}</p>			
		  	<h2>{ userData.title }</h2>				
		  	<button onClick={this.updateTitle}>Change Title</button>
		  	<form onSubmit={this.handleSubmit}>
		  	<p><input type="text" placeholder="name" value={fullName} onChange={this.handleChange} /></p>
		  	<p><input type="text" placeholder="name" value={email} onChange={this.handleChange1} /></p>
		  	<p><button>Send</button></p>
		  	</form>
	  	</BaseLayout>
	  	)
	}
}
export default Index;
