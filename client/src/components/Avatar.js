import React from 'react'
import './avatar.css';

const Avatar = props => {
	console.log('***** what is props.avatar?',props.avatar)
	console.log('***** what is props.id?',props.id)
	
	return (
		<div>
			<img src={props.avatar} key={props.id} alt="gh avatar images" className="rounded-circle avatar-img" />
		</div>
	)
}

export default Avatar;


