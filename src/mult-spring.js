import React from 'react';
import {TransitionMotion, spring, Motion} from 'react-motion';

class Spring2 extends React.Component{
		constructor(props){
				super(props)
				this.state = {
					items: [{key: 'a', width: 50, height: 50, opacity: 1, left: '500px' }, {key: 'b', width: 100, height: 100, opacity: 1, left: '650px'}]
				};

		}
		willEnter(){
		return{
				width: 0,
				height: 0,
				opacity: 1
			}
		}
		willLeave(){
			return{
				width: spring(0),
				height: spring(0),
				opacity: spring(0),
			};
		}
		render(){
			return(
	
					<TransitionMotion 
						willEnter={this.willEnter}
						willLeave={this.willLeave}
						defaultStyles={this.state.items.map(item => ({
							key: item.key,
							style: {width: 0, height: 0, opacity: 0}
						}))}
						styles={this.state.items.map(item => ({
							key: item.key,
							style: {width: spring(item.width), height: spring(item.height), opacity: spring(item.opacity)}
						}))}>
						{interpolatedStyles =>
							<div>
								{interpolatedStyles.map(index => {
								
									const {width, height, opacity} = index.style
										console.log( index);
										let blockStyle={
											width: width,
											height: height,
											opacity: opacity

										}
									return(
										<div className="block" key={index.key} style={blockStyle}></div>
									)
								})}
							</div>
						}
					</TransitionMotion>

			);
		}


	}




export default Spring2