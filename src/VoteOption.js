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
			<a className='button8' onClick={() => onVote()}>vote</a>
		</div>
	)
}

export default VoteOption;