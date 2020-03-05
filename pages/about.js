import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
class About extends React.Component{

	static async getInitialProps() {
		let posts = [];
		try{
			const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
			posts = response.data;
		}catch(err){
			console.error(err);
		}

		return {posts: posts.slice(0, 10)};
	}
	renderPosts(posts){
		return posts.map((post) => {
			return (
		  		<li><a target='_blank' href={ post.url }>{ post.title }</a></li>
		  	)
		})
	}
	render(){
		const { posts } = this.props;
		return(
	  	 <BaseLayout>
		  	<h1>Welcome to About Page</h1>
		  	<ul>
		  	{ this.renderPosts(posts) }
		  	</ul>
	  	</BaseLayout>
	  	)
	}
}
export default About;