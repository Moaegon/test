import React, { Component } from 'react';
import './Board.css';
import { Link } from 'react-router-dom';
import TopicAPI2 from './test1';
import Youtube from 'react-youtube';
import Activity from './Activity';
import Opinion from './Opinion';
import PageCardList from './PageCardList';
import PageCardAPI from './PageCardAPI';
import {PCardList} from './PageCardAPI';
import Discuss from './Discuss.js'
import Quiz from 'react-quiz-component';
import {NavHeader} from './NavHeader';



const NavLinks = [{nav:'/Standard/Stem-Cells/Science',text:'Stem Cells'},
					{nav:'/Standard/Genetic-Engineering/Science',text:'Genetic-Engineering'},
					{nav:'/Standard/Brain-Chemistry/Science',text:'Brain-Chemistry '},
					{nav:'/Standard/Vaccinations/Science', text:'Vaccinations'},
					{nav:'/Standard/Clinical-Trials/Science', text:'Clinical-Trials'},
					{nav:'/Standard/Evolution/Science', text:'Evolution'},
					{nav:'/Standard/PGD/Science', text:'PGD'}]	


class Board extends Component {
	constructor(props){
		super(props);
		this.state = {
			Subject: {},
			Activity: [],
			Opinion: [],
			Quiz:{},
			Vidsource:''
		};
		this.grabTop = this.grabTop.bind(this);
		this.grabType = this.grabType.bind(this);
	}
	grabType() {
		const got = this.props.match.params.section
		const opts = {
		height: '390',
		width: '100%',
		playerVars: { //https://developers.google.com/youtube/player_parameters;
			autoplay:1
				}
		}	  
		{console.log(got)}				 
		if (got === 'Opinion' ) {
				{console.log(this.state.Opinion)}
				return <Opinion Opinion={this.state.Opinion} />
			}
			 else if (got === 'Science'){
				return <Youtube videoId = {this.state.Vidsource} opts={opts} />
			} else if (got === 'Activities'){
				return <Activity Activity={this.state.Activity} />
			} else if (got === 'Quiz' ) {
					return <Quiz quiz={this.state.Quiz} />
			}else if (got === 'Discussion') {
				return <Discuss />
			}else{
				return <Youtube 
						videoId = {this.state.Vidsource}
				 		
	    				onReady={this._onReady}/>
				
						}

	}

	grabTop() {
		const los = this.props.match.params.dpd;
		const yo = TopicAPI2.jet(los);
		const vids = TopicAPI2.vid(los);
		const active = yo.activities;
		const opinion = yo.opinion;
		const quizno = yo.quiz;
		{console.log('yo', yo)}
		this.setState({
			Subject: yo,
			Activity: active,
			Opinion:opinion,
			Quiz: quizno,
			Vidsource: vids

		})

	}
	componentDidMount(){
		this.grabTop();
		
		


	}


	render(){
		
	
		return(
			<div>
				<div className='navro'><NavHeader NavLinks={NavLinks} /></div>	
				<Link to="/Standard/Evolution/Science">Evolution test</Link>
				<div className='boardMain'>
									
					 <div className='showCase'>{this.grabType()}</div>
										
				
				
					
				</div>
			</div>
			);
	}
}



export default Board;


// const Board = (props) => {
// 	return (
// 		<div>
// 			<h1>Iam board</h1>
// 			{console.log(props)}
// 		{console.log(props.match.params.section)}
// 		</div>

// 		);
// board will be passed props of this.props.match.url as matchi
// board will render ui based on what matchi is
// page also sends props of whatever is to be matched by topic.match.params. eg topic.activities if activty
//FOR DISCUSS ALL THE Text will be passed into the discuss component as props this.state from board, props.... from discuss

// const Board = (props) => {