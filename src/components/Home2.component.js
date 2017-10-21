import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Home2 extends Component{

	

	render(){
		return(
			<div>
				<button><a href="https://mysafeinfo.com/api/data?list=presidents&format=json">Get data</a></button>
				<button>Clear</button>
			</div>

		);
	}
}

export default Home2;