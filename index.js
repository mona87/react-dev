if (process.env.NODE_ENV !== 'production') {
  require('./src/index.html');
}
import './src/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring, presets } from 'react-motion';


class App extends React.Component {
	render() {
		return (
			<Motion
				defaultStyle = {{
					y: 100,
					z: 7
				}}
				style={{
					y: spring(500, [200, 15]),
					z: spring(1, [400, 5])
				}}>
				{obj => {
					const { y, z } = obj;
					let style = {
						transform: `translate(100px, ${y}px) scale(${z})`
					}
					return <div style={style} className="block"></div>
				}}
			</Motion>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('.app'));