import './style.scss';
import React from 'react';
// import ReactDOM from 'react-dom';
import { Motion, spring, presets } from 'react-motion';


class Spring extends React.Component {
	constructor (props){
		super(props)
		this.state = {
			effect: this.props.EFFECTS
		}
	}
	render() {

		return(
			<Motion 
				defaultStyle={{
					y: 500,
					z: 1
				}}
				style={{
					y: spring(100, presets.gentle),
					z: spring(4)
				}}>
				{ obj => {
					const { y, z } = obj;
					let blockStyle = {
						transform: `translate(0, ${y}px) scale(${z})`
					}
					return <div style={blockStyle} className="block"></div>
				}}
			</Motion>


			
		)
	}
}

Spring.propTypes = {
	EFFECTS: React.PropTypes.array.isRequired
},

Spring.defaultProps = {
	EFFECTS : [
		'fade',
		'flipX',
		'flipY'
	],
	color: 'green'
}

export default Spring;

			// <Motion defaultStyle={defaultStyle} style={style}>
			// 		{ val => { 
						
			// 				let blockStyle = {
			// 						backgroundColor: this.props.color,
			// 						position: 'absolute',
			// 						left: val.x*0.25,
			// 						transform: `translate(${val.x}px, 0)`
			// 				}
			// 				return(<div className="block" style={blockStyle}></div>)
			// 			}
			// 		}
			// </Motion>