import React from 'react';
import './App.css'

function VoteOption(props) {
	const {
		imageSrc,
		name,
		votes,
		onVote
	} = props;
	return (
		<div className='vote-option'>
			<img alt={name} src={imageSrc} className='vote-image' onClick={() => onVote()}/>
			<p className="vote-name">{name}</p>
			<p className='votes'>votes: <span>{votes}</span> </p>
			<button className='vote-button' onClick={() => onVote()}>vote</button>
		</div>
	)
}

export default VoteOption;