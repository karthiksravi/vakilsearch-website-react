import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolios extends React.Component{
	static async getInitialProps(context) {
		let post = {};
		const postId = context.query.id
		try{
			const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
			post = response.data;
		}catch(err){
			console.error(err);
		}

		return {post};
	}
	render() {
		// debugger;
		const {post} = this.props;
		return(
	  	 <BaseLayout>
		  	<h1>{post.title}</h1>
		  	<h3>{post.body}</h3>
		  	<h3>{post.id}</h3>
	  	</BaseLayout>
	  	)
	}
}
export default withRouter(Portfolios);