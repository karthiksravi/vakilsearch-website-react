import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router';


class Portfolios extends React.Component{
	
	render() {
		// debugger;
		return(
	  	 <BaseLayout>
		  	<h1>New Portfolio Page</h1>
		  	<h3>{this.props.router.query.title}</h3>
	  	</BaseLayout>
	  	)
	}
}
export default withRouter(Portfolios);