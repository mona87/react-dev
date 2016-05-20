if (process.env.NODE_ENV !== 'production') {
	require('./src/index.html');
}
import React from 'react';
import ReactDOM from 'react-dom';
import Spring from './src/spring-ex.js';
import Spring2 from './src/mult-spring';


class App extends React.Component{
	constructor (props){
		super(props)
			this.state = {}
		
	}
	render (){
		return(
			<div>

				<Spring2/>
				</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('.app'));