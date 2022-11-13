import React from 'react';

export default function BtnRestart(props) {
	return (
		<button className='btn' onClick={props.onclick}>
			Play again
		</button>
	);
}
